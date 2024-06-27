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

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (
      !userInput.title ||
      !userInput.description ||
      !userInput.category ||
      !userInput.thumbnail ||
      !userInput.createdBy
    ) {
      toast.error("All Fields are mandatory");
      return;
    }

    const response = dispatch(createNewCourse(userInput));

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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={onFormSubmit}
          className="flex flex-col items-center justify-center gap-5 rounded-lg p-8 bg-white text-gray-800 w-full max-w-3xl shadow-lg relative"
        >
          <div className="flex items-center w-full mb-5">
            <Link
              to="/"
              className="absolute top-4 left-4 text-2xl text-accent cursor-pointer"
            >
              <AiOutlineLeft />
            </Link>
            <h1 className="w-full text-center text-3xl font-bold">
              Create New Course
            </h1>
          </div>
          <div className="flex flex-col items-center gap-6 w-full">
            <label className="cursor-pointer w-full" htmlFor="image_uploads">
              {userInput.previewImage ? (
                <img
                  src={userInput.previewImage}
                  alt="Course Thumbnail"
                  className="w-full h-44 object-cover rounded-lg border"
                />
              ) : (
                <div className="w-full h-44 flex items-center justify-center border rounded-lg bg-gray-200">
                  <h1 className="font-bold text-lg text-gray-600">
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
            <div className="flex flex-col gap-1 w-full">
              <label className="text-lg font-semibold" htmlFor="title">
                Course Title
              </label>
              <input
                type="text"
                required
                name="title"
                placeholder="Course Title"
                className="bg-transparent px-4 py-2 border rounded-md"
                onChange={handleUserInput}
                value={userInput.title}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-lg font-semibold" htmlFor="createdBy">
                Instructor Name
              </label>
              <input
                type="text"
                required
                name="createdBy"
                placeholder="Instructor Name"
                className="bg-transparent px-4 py-2 border rounded-md"
                onChange={handleUserInput}
                value={userInput.createdBy}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-lg font-semibold" htmlFor="category">
                Category
              </label>
              <input
                type="text"
                required
                name="category"
                placeholder="Category"
                className="bg-transparent px-4 py-2 border rounded-md"
                onChange={handleUserInput}
                value={userInput.category}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-lg font-semibold" htmlFor="description">
                Description
              </label>
              <textarea
                required
                name="description"
                placeholder="Course Description"
                className="bg-transparent px-4 py-2 border rounded-md h-32"
                onChange={handleUserInput}
                value={userInput.description}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </HomeLayout>
  );
};

export default CreateCourse;
