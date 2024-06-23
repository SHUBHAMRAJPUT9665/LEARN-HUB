import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";
import HomeLayout from "../../Layouts/HomeLayout";
import CourseCard from "../../componets/CourseCard";

const CourseList = () => {
  const dispatch = useDispatch();
  const { courseData } = useSelector((state) => state.course);

  async function loadCourse() {
    await dispatch(getAllCourses());
  }

  useEffect(() => {
    loadCourse();
  }, []);
  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-12 px-4 md:px-20 flex flex-col gap-10 text-white">
        <h1 className="text-base ml-5 md:text-2xl lg:text-2xl font-semibold text-center md:text-left">
          Explore the Courses made by
          <span className="mx-2 font-bold text-yellow-500">
            Industry experts
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {courseData.map((course) => (
             <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </HomeLayout>
  );
};

export default CourseList;
