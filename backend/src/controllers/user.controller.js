import User from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";
import cloudinary from "cloudinary";
import uploadFile from "../utils/upload.js";
const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // Use secure cookies in production
  sameSite: "Strict", // Ensuring cookie is not sent along with cross-site requests
};

const register = async (req, res, next) => {
  const { fullName, password, email } = req.body;

  if (!fullName || !email || !password) {
    return next(new ApiError(400, "All fields are required"));
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(409).json({
      success:false,
      message:"User with this email already exists",
      data:{}
    })
  }

  const avatarFile = req.files?.avatar[0]?.path;
  if (!avatarFile) {
    throw new ApiError(400, "Avatar and cover image files are required");
  }

  const avatarUploaded = await uploadFile(avatarFile, {
    width: 250,
    height: 250,
    gravity: "faces",
    crop: "fill",
  });

  const user = await User.create({
    fullName,
    email,
    password,
    avatar: {
      public_id: avatarUploaded.public_id || email,
      secure_url:
        avatarUploaded.secure_url ||
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    },
  });
  if (!user) {
    return next(new ApiError(500, "Error creating user"));
  }

  const createdUser = await User.findById(user._id).select("-password");
  if (!createdUser) {
    return next(new ApiError(500, "Error retrieving created user"));
  }

  const token = await user.generateJWTToken();
  res.cookie("token", token, cookieOptions);

  const subject = `Account Created to LEARN HUB`;

  const message = `Your account has been successfully created, and you can now enjoy all the features and benefits we offer.
  Here are your login details for quick reference:
  Username: ${fullName}
  Email: ${email}`;

  await sendEmail(email, subject, message);

  
  return res.status(201).json({
    success:true,
    message:"user created succesfully",
    data:createdUser
  });
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ApiError(400, "All fields are required"));
    }

    const user = await User.findOne({ email }).select("+password");

    if(!user){
      return res
      .status(401)
      .json({
        success:false,
        message:"user does not exits",
        data:{}
      });
    }

    if (!user || !(await user.comparePassword(password))) {
      return res
        .status(401)
        .json({
          success:false,
          message:"Invalid Credentials",
          data:{}
        });
    }

    const token = await user.generateJWTToken();
    const loggedUser = await User.findById(user._id).select("-password");

    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
        success:true,
        message: "User logged in successfully",
        data: loggedUser,token
      })
  } catch (error) {
    return next(new ApiError(400, error.message));
  }
};

const logout = async (req, res) => {
  res.clearCookie("token", {
    secure: true,
    maxAge: 0,
    httpOnly: true,
    sameSite: "Strict",
  });

  return res
    .status(200)
    .json({
      success:true,
      message:"User logged out successfully",
      data:{}
});
};

const getProfile = async (req, res, next) => {
  try {
    const userId = req.user._id;
    if (!userId) {
      return res.status(400).json({
        success:false,
        message:"User ID is missing",
        data:{}
      })
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        success:false,
        message:"User not found",
        data:{}
      })
    }

    return res.status(200).json({
      success:true,
      message:"user fetched",
      data:user
    })
  } catch (error) {
    return res.status(400).json({
      success:false,
      message:error.message,
      data:{}
    }) 
  }
};

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new ApiError(400, "email is required"));
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next(new ApiError(400, "user not found"));
  }

  const resetToken = await user.generatePasswordResetToken();
  await user.save();

  const resetPasswordURL = `${process.env.FRONTEND_URL}/api/v1/user/reset-password/${resetToken}`;

  const subject = `password reset`;

  console.log(resetToken);

  const message = `you can rest your password by clicking <a href=${resetPasswordURL} target="_blank">Reset your password</a> \n if the above link does not work for some reson then copy pase this link in new Tab ${resetPasswordURL}`;

  try {
    await sendEmail(email, subject, message);

    res.status(200).json({
      success: true,
      message: `Reset password token has send to email ${email} successfully`,
    });
  } catch (error) {
    user.forgotPasswordExpiry = undefined;
    user.forgotPasswordToken = undefined;

    await user.save();
    return next(new ApiError(400, error.message));
  }
};

const resetPassword = async (req, res) => {
  const { resetToken } = req.params;

  const { password } = req.body;

  if (!password) {
    return res.status(400).json("password is required");
  }

  const forgotPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const user = await User.findOne({
    forgotPasswordToken,
    forgotPasswordExpiry: { $gt: Date.now() },
  });

  if (!user) {
    res.status(400).json(new ApiError(200, "user not found"));
  }

  user.password = password;
  user.forgotPasswordExpiry = undefined;
  user.forgotPasswordToken = undefined;

  user.save();

  res.status(200).json(
    new ApiResponse(200, {
      success: true,
      message: "Password changed successfully",
    })
  );
};

const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const id = req.user._id;

  if (!oldPassword || !newPassword) {
    throw new ApiError(400, "All filed are mandatory");
  }
  const user = await User.findById(id).select("+password");

  if (!user) {
    throw new ApiError(400, "user does not exits");
  }

  const isPasswordValid = await user.comparePassword(oldPassword);

  if (!isPasswordValid) {
    throw new ApiError(400, "invalid old password");
  }
  user.password = newPassword;

  await user.save();

  user.password = undefined;

  res.status(200).json(
    new ApiResponse(200, {
      success: true,
      message: "Password changed successfully",
    })
  );
};

const updateUser = async (req, res) => {
  const { fullName } = req.body;

  const id = req.user._id;

  const user = await User.findById(id);

  if (!user) {
    throw new ApiError(400, "user does not exits");
  }

  if (req.fullName) {
    user.fullName = fullName;
  }

  if (req.files) {
    await cloudinary.v2.uploader.destroy(user.avatar.public_id);

    const avatarFile = req.files?.avatar[0]?.path;
    if (!avatarFile) {
      throw new ApiError(400, "Avatar and cover image files are required");
    }
    const avatarLocalPath = avatarFile;

    var avatarUploaded = await uploadOnCloudinary(avatarLocalPath);
    if (!avatarUploaded) {
      throw new ApiError(400, "Error uploading files to Cloudinary");
    }
    user.avatar.secure_url = avatarUploaded.url;
    user.avatar.public_id = avatarUploaded.public_id || email;
  }

  await user.save();

  res.status(200).json(
    new ApiResponse(200, {
      success: true,
      message: "user details updated successfully",
      user,
    })
  );
};

const getUser = async (req, res) => {
  const users = await User.find({ email: "shubhamrajput8668@gmail.com" });

  res.status(200).json(users);
};

export {
  register,
  login,
  getProfile,
  logout,
  forgotPassword,
  resetPassword,
  getUser,
  changePassword,
  updateUser,
};
