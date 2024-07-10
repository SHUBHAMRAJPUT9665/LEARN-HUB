import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  // Function to handle click on instructor
  const handleInstructorClick = () => {
    navigate(`/instructors/${course.instructorId}`);
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden mx-auto mb-4 cursor-pointer transition-transform transform hover:scale-105 duration-300">
    <a href="#" onClick={() => { navigate("/course/description", { state: { ...course } }); }}>
        <img className="w-full rounded-t-lg object-cover object-center" src={course.thumbnail?.secure_url || "https://via.placeholder.com/150"} alt={course.title} />
    </a>
    <div className="px-6 py-4">
        <a href="#" onClick={() => { navigate("/course/description", { state: { ...course } }); }}>
            <h5 className="text-xl font-bold mb-2 text-gray-900">{course.title}</h5>
        </a>
        <p className="text-sm text-gray-700 mb-2">{course.description}</p>
        <div className="flex items-center space-x-1 mb-2">
            <span className="text-gray-600 text-sm">Instructor: </span>
            <span className="text-blue-600 cursor-pointer" onClick={(e) => { e.stopPropagation(); handleInstructorClick(); }}>
                {course.createdBy}
            </span>
        </div>
        <div className="flex items-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                {course.category}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                399 Rs
            </span>
        </div>
    </div>
</div>

  );
};

export default CourseCard;
