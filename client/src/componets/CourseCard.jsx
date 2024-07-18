import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const filterData = [
  { id: "1", title: "All" },
  { id: "2", title: "Development" },
  { id: "3", title: "Business" },
  { id: "4", title: "Design" },
  { id: "5", title: "Lifestyle" },
];

const CourseCard = ({ courseData }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleInstructorClick = (instructorId) => {
    navigate(`/instructors/${instructorId}`);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? courseData
      : courseData.filter((course) =>
          course.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <>
      <div className="flex  justify-center space-x-4 mb-4">
        {filterData.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.title)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category.title
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-between">
        {filteredCourses.map((course) => (
          <div
            key={course._id}
            onClick={() => {
              navigate("/course/description", { state: { ...course } });
            }}
            className="w-full max-w-sm bg-white border  border-gray-200 rounded-lg shadow-lg overflow-hidden mx-auto mb-4 cursor-pointer transition-transform transform hover:scale-105 duration-300"
          >
            <img
              className="w-full rounded-t-lg object-cover object-center"
              src={
                course.thumbnail?.secure_url ||
                "https://via.placeholder.com/150"
              }
              alt={course.title}
            />
            <div className="px-6 py-4">
              <h5 className="text-xl font-bold mb-2 text-gray-900">
                {course.title}
              </h5>
              <p className="text-base font-normal text-black mb-2">
                {course.description}
              </p>
              <div className="flex items-center space-x-1 mb-2">
                <span className="text-gray-600 text-sm">Instructor: </span>
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleInstructorClick(course.instructorId);
                  }}
                >
                  {course.createdBy}
                </span>
              </div>

              <div className="flex items-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                  {course.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseCard;
