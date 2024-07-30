import React, { useState } from "react";
import toast from "react-hot-toast";
import HomeLayout from "../../Layouts/HomeLayout";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { createNewCourse } from "../../Redux/Slices/CourseSlice";
import { AiOutlineLeft } from "react-icons/ai";

const CreateCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    title: "",
    category: "",
    createdBy: "",
    description: "",
    thumbnail: "",
    previewImage: "",
  });

  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];
    if (uploadedImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setUserInput({
          ...userInput,
          previewImage: this.result,
          thumbnail: uploadedImage,
        });
      });
    }
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !userInput.title ||
      !userInput.description ||
      !userInput.category ||
      !userInput.thumbnail ||
      !userInput.createdBy
    ) {
      toast.error("All fields are mandatory");
      return;
    }

    const response = await dispatch(createNewCourse(userInput));

    if (response?.payload?.success) {
      setUserInput({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: "",
      });

      navigate("/courses");
    }
  };

  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex flex-col items-center justify-center py-10 px-4 md:px-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <header className="flex items-center justify-center relative mb-6">
            <Link 
              to="/" 
              className="absolute left-2 text-2xl text-blue-600"
            >
              <AiOutlineLeft />
            </Link>
            <h1 className="text-2xl text-yellow-600 font-bold">
              Create New Course
            </h1>
          </header>
          <form onSubmit={onFormSubmit} className="flex flex-col gap-4">
            <label htmlFor="image_uploads" className="cursor-pointer w-full">
              {userInput.previewImage ? (
                <img
                  src={userInput.previewImage}
                  alt="Course Thumbnail"
                  className="w-full h-36 object-cover rounded-md border-2 border-gray-300"
                />
              ) : (
                <div className="w-full h-36 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-md bg-gray-200">
                  <h1 className="font-semibold text-gray-600">
                    Upload your course thumbnail
                  </h1>
                </div>
              )}
            </label>
            <input
              type="file"
              id="image_uploads"
              accept=".jpg,.jpeg,.png"
              name="image_uploads"
              onChange={handleImageUpload}
              className="hidden"
            />
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              onChange={handleUserInput}
              className="input input-bordered w-full bg-white text-black px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={userInput.title}
            />
            <input
              type="text"
              name="createdBy"
              placeholder="Instructor Name"
              onChange={handleUserInput}
              className="input input-bordered w-full bg-white text-black px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={userInput.createdBy}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              onChange={handleUserInput}
              className="input input-bordered w-full bg-white text-black px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={userInput.category}
            />
            <textarea
              name="description"
              placeholder="Course Description"
              onChange={handleUserInput}
              className="textarea textarea-bordered w-full bg-white text-black px-4 py-2 border-2 rounded-md resize-none h-36 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={userInput.description}
            />
            <button
              type="submit"
              className="mt-6 py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-md shadow-md hover:from-green-500 hover:to-blue-600 transition duration-300"
            >
              Create Course
            </button>
          </form>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CreateCourse;
