import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import aboutPageImage from "../Assets/Images/aboutMainImage.png";
import apj from "../Assets/Images/QuotesPersonalityImage/apj.png";
import billgates from "../Assets/Images/QuotesPersonalityImage/billGates.png";

import einstein from "../Assets/Images/QuotesPersonalityImage/einstein.png";
import nelsonMandela from "../Assets/Images/QuotesPersonalityImage/nelsonMandela.png";
import steveJobs from "../Assets/Images/QuotesPersonalityImage/steveJobs.png";

// import steveJobs from '../Assets/Images/QuotesPersonalityImage/steveJobs.png'

const AboutUs = () => {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. we are providing the platform for the asipiring teachers
              and student to share their skills, creativity and knowledgeto each
              other empo in the growth and wellness of mankind
            </p>
          </section>
          <div className="w-1/2">
            <img
              className="drop-shadow-2xl"
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))",
              }}
              src={aboutPageImage}
              alt="about us image"
            />
          </div>
        </div>
        <div className="carousel w-1/2 my-16 m-auto ">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={apj}
                className="w-40 rounded-full border-2 border-gray-400"
              />
               <p className="text-xl text-center text-gray-200">"The best brains of the nation may be found on the last benches of the classroom."</p>
              <h3 className="text-2xl text-center font-semibold">Abdul Kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={billgates}
                className="w-40 rounded-full border-2 border-gray-400"
              />
               <p className="text-xl text-center text-gray-200">"Education is the most powerful tool you can use to change the wolrd"</p>
              <h3 className="text-2xl text-center font-semibold">Bill Gates</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={einstein}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-center text-gray-200">"Imagination is more important than knowledge. Knowledge is limited; imagination encircles the world."</p>
              <h3 className="text-2xl text-center font-semibold">Albert Einstein</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={nelsonMandela}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-center text-gray-200">"Education is the most powerful tool you can use to change the wolrd"</p>
              <h3 className="text-2xl text-center font-semibold">Nelson Mandela</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={steveJobs}
                className="w-40 rounded-full border-2 border-gray-400"
              />
               <p className="text-xl text-center text-gray-200">"Computers themselves, and software yet to be developed, will revolutionize the way we learn."</p>
              <h3 className="text-2xl text-center font-semibold">Steve Jobs</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};
export default AboutUs;
