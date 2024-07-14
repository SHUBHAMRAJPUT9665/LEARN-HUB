import React, { useState } from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state?.auth?.data);
  const user = typeof userData === "string" ? JSON.parse(userData) : userData;

  const { _id } = user;

  const [data, setData] = useState({
    previewImage: "",
    fullName: "",
    avatar: "",
    userId: _id,
  });

  const handleAvatarClick = () => {
    document.getElementById('image_uploads').click();
  };

  const getImage = (event) => {
    event.preventDefault();
    const uploadedImage = event.target.files[0];

    if (uploadedImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", () => {
        setData((prevState) => ({
          ...prevState,
          avatar: uploadedImage,
          previewImage: fileReader.result
        }));
      });
    }
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onFormsSubmit = async (e) => {
    e.preventDefault();
    if (!data.fullName || !data.avatar) {
      toast.error("All fields are mandatory");
      return;
    }
    if (data.fullName.length < 5) {
      toast.error("Name should be at least 5 characters long");
      return;
    }
    const formData = new FormData();
    formData.append('fullName', data.fullName);
    formData.append('avatar',data.avatar);



    const response = await dispatch(updateProfile(formData));
    if (response?.payload?.success) {
      setData({
        previewImage: null,
        fullName: "",
        avatar: "",
        userId: _id,
      });
    }

    await dispatch(getUserData());
    navigate("/user/profile");
  };

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh] bg-gray-100">
        <form
          onSubmit={onFormsSubmit}
          className="flex flex-col justify-center gap-5 rounded-lg p-4 text-gray-800 bg-white w-80 min-h-[26rem] shadow-md"
        >
          <h1 className="text-center text-2xl font-semibold">Edit Profile</h1>
          <label
            onChange={getImage}
            onClick={handleAvatarClick}
            className="w-28 cursor-pointer h-28 rounded-full m-auto"
          >
            {data.previewImage ? (
              <img
                className="w-28 h-28 rounded-full m-auto"
                src={data.previewImage}
                alt="user profile"
              />
            ) : (
              <BsPersonCircle className="w-28 h-28 rounded-full m-auto text-gray-400" />
            )}
          </label>
          <input
            type="file"
            name="image_uploads"
            id="image_uploads"
            accept=".jpg,.jpeg,.png,.svg"
            className="hidden"
            onChange={getImage}
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="text-lg font-semibold">
              Full Name
            </label>
            <input
              required
              name="fullName"
              id="fullName"
              placeholder="Enter your name"
              className="bg-gray-100 rounded-lg px-2 py-1 border"
              value={data.fullName}
              onChange={handleUserInput}
              type="text"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 p-2 rounded-lg hover:bg-yellow-700 text-white"
          >
            Update Profile
          </button>
          <Link to={"/user/profile"}>
            <p className="link text-blue-600 cursor-pointer flex items-center justify-center w-full gap-2">
              <AiOutlineArrowLeft /> Go back to profile
            </p>
          </Link>
        </form>
      </div>
    </HomeLayout>
  );
};

export default EditProfile;
