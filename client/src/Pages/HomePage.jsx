import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../Assets/Animation - 1718988311424.json";
import FAQSection from "./FAQ/FAQSection";
import homeAnimation from '../Assets/mainHome.json'
const HomePage = () => {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex flex-col-reverse lg:flex-row items-center justify-center gap-10 mx-6 md:mx-16 h-auto lg:h-[90vh]">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Find out best
            <span className="text-yellow-500 m-3 font-bold">Online courses</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-200">
            LEARN HUB is your one-stop-shop for upscaling. Get maximum value for
            time and resources you invest, with job-ready courses &
            high-technology, available at the lowest cost.
          </p>
          <div className="p-2 space-y-4 md:space-x-6 md:space-y-0 flex flex-col md:flex-row justify-center lg:justify-start">
            <Link to="/courses">
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold sm:text-lg text-sm cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore courses
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold sm:text-lg text-sm cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Lottie animationData={animationData} />
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl text-white md:text-2xl lg:text-2xl font-semibold">
          Welcome to
          <span className="text-yellow-500 m-3 font-bold">LEARN HUB!</span>
        </h1>
        <div className="flex p-5 justify-between  items-center gap-5">
          <p className="font-semibold text-white text-center text-xl md:text-xl lg:text-2xl">
            <span className="text-[#5FA349]">2500</span> + Members
          </p>
          <p className="text-xl  font-bold text-white">|</p>
          <p className="font-semibold text-center text-white text-xl md:text-xl lg:text-2xl">213 joined this month</p>
        </div>
      </div>

      <div className="pt-5 flex flex-col md:flex-row justify-around  items-center mx-4">
        <div className="w-1/2 md:w-1/2 p-5 flex justify-center">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
           <Lottie animationData={homeAnimation} />
          </div>
        </div>
      </div>
      
      
      <FAQSection />
    </HomeLayout>
  );
};

export default HomePage;
