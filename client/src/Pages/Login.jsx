import React, { useState } from "react";
import toast from "react-hot-toast";
import HomeLayout from "../Layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Slices/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    // Validate form data
    if (!loginData.email || !loginData.password) {
      return toast.error("Please fill all details");
    }
   
    
    // Dispatch the action
    const response = await dispatch(login(loginData));
    
    if(response?.payload?.success){
      navigate('/about')
    }
    
    setLoginData({
      email: '',
      password: '',
    });
  };

  return (
    <HomeLayout>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login Page
              </h1>
              <form noValidate className="space-y-4 md:space-y-6" onSubmit={onLogin}>
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
                    value={loginData.email}
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
                    value={loginData.password}
                    onChange={handleUserInput}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full hover:bg-blue-600 transition-all text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  login
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link to='/signup' className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign up 
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

export default Login;
