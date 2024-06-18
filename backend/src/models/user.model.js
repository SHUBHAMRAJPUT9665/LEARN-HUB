import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from 'crypto'
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "name is required"],
      minLength: [5, "Name must be at least 5 character"],
      maxLength: [50, "Name should be 50 character"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      lowercase: true,
      trim: true,
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please fill valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [8, "password must be 8 character"],
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,

    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,

    subscription:{
      types:String,
      status: String
    }
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.generateJWTToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      subscription: this.subscription,
      role: this.role,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password , this.password)
 }

 userSchema.methods.generatePasswordResetToken = async function(){
  const resetToken = crypto.randomBytes(20).toString('hex')

  this.forgotPasswordToken = crypto
  .createHash('sha256')
  .update(resetToken)
  .digest('hex')
;
  this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000;

  return resetToken;
 }
const User = mongoose.model("User", userSchema);

export default User;
