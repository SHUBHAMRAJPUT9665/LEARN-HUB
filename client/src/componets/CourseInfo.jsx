import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const CourseInfo = () => {
  const { state } = useLocation();
  const {role,data} = useSelector((state) => state.auth)
  useEffect(() => {
    console.log(state)
  }, []);
  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
        <div className="grid grid-cols-2 gap-10 py-10 relative">
          <div className="space-y-5 b">
            <img
              className="w-full h-64 "
              src={state?.thumbnail.secure_url}
              alt=""
            />
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-between text-xl">
                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    Total lectures: {""}
                  </span>
                  {state?.lectures.length}
                </p>

                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    Instructor: {""}
                  </span>
                  {state?.createdBy}
                </p>
              </div>
              {
                role === 'ADMIN' || data?.subscription?.status === 'ACTIVE' ? (
                  <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold sm:text-lg text-sm cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                  Watch lectures
                </button>
                ):(
                  <button className="bg-yellow-500 px-2 py-1 rounded-md font-semibold sm:text-lg text-sm cursor-pointer hover:bg-yellow-600 bg transition-all ease-in-out duration-300">
                  Subscribe
                </button>
                )
              }
            </div>
          </div>
          <div className="spce-y-2 text-xl">
            <h1 className="text-3xl font-bold text-yellow-500 mb-5 text-center">
              {state?.title}
            </h1>
            <p className="text-yellow-500">
              Course description
            </p>
            <p>
              {state?.description}
            </p>

          </div>
        </div>
      </div>
    </HomeLayout>
  );
};
export default CourseInfo;
