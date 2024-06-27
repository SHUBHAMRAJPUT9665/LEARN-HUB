import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import aboutPageImage from "../Assets/Images/aboutMainImage.png";
import CarouselSlide from "../componets/CarouselSlide";
import { quote } from "../constants/quote";
import animationData from '../Assets/about.json'
import Lottie from "lottie-react";

const AboutUs = () => {
  return (
    <HomeLayout>
      <div className="px-4 py-10 md:px-20 md:py-20 flex flex-col text-white">
        <div className="flex flex-col md:flex-row items-center gap-5 mx-4 md:mx-10">
          <section className="w-full md:w-1/2 space-y-6 md:space-y-10">
            <h1 className="text-3xl mt-6 sm:mt-0 md:text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-sm  md:text-xl text-gray-200">
              Our goal is to provide affordable and quality education to the
              world. We are providing a platform for aspiring teachers and
              students to share their skills, creativity, and knowledge with
              each other, empowering the growth and wellness of mankind.
            </p>
          </section>
          <div className="w-full md:w-1/2">
           <Lottie animationData={animationData}/>
          </div>
        </div>
        <div className="carousel w-full md:w-2/3 lg:w-1/2 my-10 mx-auto">
          {quote &&
            quote.map((person) => (
              <CarouselSlide
                title={person.title}
                image={person.image}
                description={person.description}
                slideNumber={person.slideNumber}
                totalSlides={person.totalSlides}
                key={person.slideNumber}
              />
            ))}
        </div>
      </div>
    </HomeLayout>
  );
};

export default AboutUs;
