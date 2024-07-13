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
  const user = typeof userData === 'string' ? JSON.parse(userData) : userData;

  console.log(user)
  const { _id } = user;


  const [data, setData] = useState({
    previewImage: "",
    fullName: "",
    avatar: undefined,
    userId: user?._id,
  });

  const handleAvatarClick = () => {
    document.getElementById('image_upload').click();
  };

  function handleImageUpload(event) {
    event.preventDefault();
    // getting the image
    const uploadedImage = event.target.files[0];

    if (uploadedImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setData({
          ...data,
          previewImage: this.result,
          avatar: uploadedImage,
        });
      });
    }
  }
  function handleInputChange(e) {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  }

  async function onFormsSubmit(e) {
    e.preventDefault();
    if (!data.fullName || !data.avatar) {
      toast.error("All fiels are mandatory");
      return;
    }
    if (data.fullName.length < 5) {
      toast.error("name should be 8 character");
    }

    const formData = new FormData();

    formData.append("fullName", data.fullName);
    formData.append("avatar", data.avatar);

    await dispatch(updateProfile(data.userId, data));

    await dispatch(getUserData());
    navigate("/");
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          onSubmit={onFormsSubmit}
          className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-semibold">Edit Profile</h1>
          <label onClick={handleAvatarClick} className="w-28 cursor-pointer h-28 rounded-full m-auto">
            {data.previewImage ?(
              <img 
              className="w-28 h-28 rounded-full m-auto"
              src={
                data.previewImage
              } alt="user profile" />
            ):(
              <BsPersonCircle className='w-28 h-28 rounded-full m-auto' />
            )}
          </label>
          <input
                    type="file"
                    name="image_upload"
                    id="image_upload"
                    accept=".jpg,.jpeg,.png,.svg"
                    className="hidden"
                    onChange={handleImageUpload}
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="text-lg font-semibold">Full Name</label>
            <input required name="fullName" id="fullName" placeholder="Enter your name" className="bg-transparent rounded-lg px-2 py-1 border" value={data.fullName} onChange={handleInputChange} type="text" />
          </div>
          <button type="submit" className="w-full bg-yellow-600 p-2 rounded-lg hover:"> 
            update profile
          </button>
          <Link to={'/user/profile'}>
              <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2">
              <AiOutlineArrowLeft />  Go back to profile
              </p>
          </Link>
        </form>
      </div>
    </HomeLayout>
  );
};

export default EditProfile;
