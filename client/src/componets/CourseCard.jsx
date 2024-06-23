import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  // Function to handle click on instructor
  const handleInstructorClick = () => {
    // Example: Navigate to a specific instructor's profile
    navigate(`/instructors/${course.instructorId}`);
  };

  return (
    <div onClick={()=>{
      console.log(course._id)
      navigate(`/course/${course._id}`)
    }} key={course.id} className="cursor-pointer max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white text-black rounded-xl overflow-hidden shadow-lg mb-4 mx-auto flex flex-col h-full">
      <img
        className="w-full h-48 object-cover object-center"
        src={course.thumbnail?.secure_url || "https://via.placeholder.com/150"}
        alt={course.title}
      />
      <div className="flex flex-col justify-between h-full px-6 py-4">
        <div>
          <div className="font-bold text-xl mb-2">{course.title}</div>
          <p className="text-sm md:text-base text-gray-700">{course.description}</p>
          <span className="text-gray-600 text-sm mt-2">
            Instructor:{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={handleInstructorClick} // Add onClick handler here
            >
              {course.createdBy}
            </span>
          </span>
        </div>
        <div className="mt-auto">
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer"
            onClick={handleInstructorClick} // Add onClick handler here
          >
            {course.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
