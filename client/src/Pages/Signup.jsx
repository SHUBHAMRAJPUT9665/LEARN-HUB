import React, { useState } from "react";
import toast from "react-hot-toast";
import HomeLayout from "../Layouts/HomeLayout";
import { BsPerson } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/Slices/AuthSlice";
const Signup = () => {
  const [previewImage, setPreviewImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    password: '',
    avatar: ''
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    });
  };

  const handleAvatarClick = () => {
    document.getElementById('image_upload').click();
  };

  function getImage(event) {
    event.preventDefault();
    // getting the image
    const uploadedImage = event.target.files[0];

    if(uploadedImage) {
        setSignupData({
            ...signupData,
            avatar: uploadedImage
        });
        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load", function () {
            setPreviewImage(this.result);
        })
    }
}
  const createNewAccount = async (e) => {
    e.preventDefault();
    // Validate form data
    if (!signupData.fullName || !signupData.email || !signupData.password || !signupData.avatar) {
      return toast.error("Please fill all details");
    }
    if (signupData.fullName.length < 5) {
      return toast.error('Name should be at least 5 characters');
    }
    if (!signupData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return toast.error('Please enter a valid email');
    }
    if (!signupData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
      return toast.error('Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter');
    }

    const formData = new FormData();
    formData.append('fullName', signupData.fullName);
    formData.append('email', signupData.email);
    formData.append('password', signupData.password);
    formData.append('avatar', signupData.avatar);

    // Dispatch the action
    const response = await dispatch(createAccount(formData));

    if(response?.payload?.success){
      navigate('/')
    }
    setSignupData({
      fullName: '',
      email: '',
      password: '',
      avatar: ''
    });
    setPreviewImage('');
  };

  return (
    <HomeLayout>
      <section className="bg-gray-50  dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form noValidate className="space-y-4  md:space-y-6" onSubmit={createNewAccount}>
                <div className="text-center">
                  <div className="cursor-pointer inline-block" onClick={handleAvatarClick}>
                    {previewImage ? (
                      <img
                        className="w-24  h-24 rounded-full"
                        src={previewImage}
                        alt="Avatar"
                      />
                    ) : (
                      <BsPerson className="w-24 h-24 rounded-full" />
                    )}
                  </div>
                  <input
                    type="file"
                    name="image_upload"
                    id="image_upload"
                    accept=".jpg,.jpeg,.png,.svg"
                    className="hidden"
                    onChange={getImage}
                  />
                </div>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb=2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Enter your name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={handleUserInput}
                    value={signupData.fullName}
                  />
                 </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    placeholder="Enter your email.."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleUserInput}
                    value={signupData.email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    value={signupData.password}
                    onChange={handleUserInput}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full hover:bg-blue-600 transition-all text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Signup;