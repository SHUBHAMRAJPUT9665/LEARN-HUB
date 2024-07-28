import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CourseInfo = () => {
  const { state } = useLocation();
  const { role, data } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  

  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-12 px-4 sm:px-8 md:px-20 flex flex-col items-center justify-center text-white bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-screen-lg w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-6 md:p-10">
            <div className="flex flex-col items-center md:items-start space-y-5">
              <img
                className="w-full md:w-full h-40 sm:h-48 md:h-64 object-cover rounded-md shadow-md transform hover:scale-105 transition-transform duration-300"
                src={state?.thumbnail.secure_url}
                alt="Course Thumbnail"
              />
              <div className="space-y-4 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start justify-between text-base sm:text-lg md:text-xl space-y-2">
                  <p className="font-semibold">
                    <span className="text-yellow-500 font-bold">
                      Total lectures:{" "}
                    </span>
                    {state?.lectures.length}
                  </p>
                  <p className="font-semibold">
                    <span className="text-yellow-500 font-bold">
                      Instructor:{" "}
                    </span>
                    {state?.createdBy}
                  </p>
                </div>
                {role === 'ADMIN' || data?.subscription?.status === 'active' ? (
                  <button onClick={() => navigate('/course/lecture',{state:{...state}})} className="bg-yellow-500 px-3 sm:px-5 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                    Watch lectures
                  </button>
                ) : (
                  <button onClick={() => navigate('/checkout')} className="bg-yellow-500 px-3 sm:px-5 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                    Subscribe
                  </button>
                )}
              </div>
            </div>
            <div className="space-y-4 text-base sm:text-lg md:text-xl text-center md:text-left">
              <h1 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-5">
                {state?.title}
              </h1>
              <p className="text-yellow-500 font-semibold">Course description</p>
              <p className="text-lg">{state?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CourseInfo;
