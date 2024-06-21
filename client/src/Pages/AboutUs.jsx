import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import aboutPageImage from "../Assets/Images/aboutMainImage.png";
import apj from "../Assets/Images/QuotesPersonalityImage/apj.png";
import billgates from "../Assets/Images/QuotesPersonalityImage/billGates.png";
import einstein from "../Assets/Images/QuotesPersonalityImage/einstein.png";
import nelsonMandela from "../Assets/Images/QuotesPersonalityImage/nelsonMandela.png";
import steveJobs from "../Assets/Images/QuotesPersonalityImage/steveJobs.png";

const AboutUs = () => {
  return (
    <HomeLayout>
      <div className="px-4 py-10 md:px-20 md:py-20 flex flex-col text-white">
        <div className="flex flex-col md:flex-row items-center gap-5 mx-4 md:mx-10">
          <section className="w-full md:w-1/2 space-y-6 md:space-y-10">
            <h1 className="text-3xl mt-6 sm:mt-0 md:text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-sm md:text-xl text-gray-200">
              Our goal is to provide affordable and quality education to the
              world. We are providing a platform for aspiring teachers and
              students to share their skills, creativity, and knowledge with
              each other, empowering the growth and wellness of mankind.
            </p>
          </section>
          <div className="w-full md:w-1/2">
            <img
              className="drop-shadow-2xl w-full"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))",
              }}
              src={aboutPageImage}
              alt="about us image"
            />
          </div>
        </div>
        <div className="carousel w-full md:w-2/3 lg:w-1/2 my-10 mx-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-6 px-[20%] md:px-[15%]">
              <img
                src={apj}
                className="w-20 md:w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-sm md:text-xl text-center text-gray-200">
                "The best brains of the nation may be found on the last benches
                of the classroom."
              </p>
              <h3 className="text-lg md:text-2xl text-center font-semibold">
                Abdul Kalam
              </h3>
              <div className="absolute flex  justify-between transform  -translate-y-1/2 left-5 right-5 top-1/2">
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
            <div className="flex flex-col items-center justify-center gap-4 px-[20%] md:px-[15%]">
              <img
                src={billgates}
                className="w-20 md:w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-sm md:text-xl text-center text-gray-200">
                "Education is the most powerful tool you can use to change the
                world."
              </p>
              <h3 className="text-lg md:text-2xl text-center font-semibold">
                Bill Gates
              </h3>
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
            <div className="flex flex-col items-center justify-center gap-4 px-[20%]  md:px-[15%]">
              <img
                src={einstein}
                className="w-20 md:w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-sm md:text-xl text-center text-gray-200">
                "Imagination is more important than knowledge. Knowledge is
                limited; imagination encircles the world."
              </p>
              <h3 className="text-lg md:text-2xl text-center font-semibold">
                Albert Einstein
              </h3>
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
            <div className="flex flex-col items-center justify-center gap-4 px-[20%] md:px-[15%]">
              <img
                src={nelsonMandela}
                className="w-20 md:w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-sm md:text-xl text-center text-gray-200">
                "Education is the most powerful tool you can use to change the
                world."
              </p>
              <h3 className="text-lg md:text-2xl text-center font-semibold">
                Nelson Mandela
              </h3>
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
            <div className="flex flex-col items-center justify-center gap-4 px-[20%]  md:px-[15%]">
              <img
                src={steveJobs}
                className="w-20 md:w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-sm md:text-xl text-center text-gray-200">
                "Computers themselves, and software yet to be developed, will
                revolutionize the way we learn."
              </p>
              <h3 className="text-lg md:text-2xl text-center font-semibold">
                Steve Jobs
              </h3>
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
