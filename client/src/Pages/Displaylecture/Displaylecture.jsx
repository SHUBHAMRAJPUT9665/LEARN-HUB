import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import HomeLayout from '../../Layouts/HomeLayout';
import { deleteCourseLecture, getCourseLecture } from '../../Redux/Slices/LectureSlice';

const DisplayLecture = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { lectures } = useSelector((state) => state.lecture);
  const [currentVideo, setCurrentVideo] = useState(0);
  const { role } = useSelector((state) => state.auth);

 async function onLectureDelete(courseId,lectureId){
 await dispatch(deleteCourseLecture(courseId,lectureId))
 await dispatch(getCourseLecture(courseId));

      console.log()
  }

  useEffect(() => {
    if (!state) navigate('/courses');
    dispatch(getCourseLecture(state._id));
  }, [dispatch, navigate, state]);

  return (
    <HomeLayout>
      <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm sm:text-xl md:text-2xl font-bold text-yellow-500 mb-4 sm:mb-8">
          Course Name: {state?.title}
        </div>

        {lectures && lectures.length > 0 ? (
          <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto space-y-6 lg:space-y-0 lg:space-x-6">
            {/* Left section for displaying list of lectures */}
            <div className="w-full lg:w-1/3 bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg overflow-y-auto h-64 sm:h-80 lg:h-[80vh]">
              <h2 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-4">Lectures List</h2>
              {role === 'ADMIN' && (
                <button
                  onClick={() => navigate('/course/addlecture', { state: { ...state } })}
                  className="bg-yellow-500 text-black px-3 py-2 rounded-md font-semibold text-sm mb-4 w-full"
                >
                  Add New Lecture
                </button>
              )}
              <ul className="space-y-4 text-sm sm:text-base">
                {lectures.map((lecture, idx) => (
                  <li
                    key={lecture._id}
                    className={`p-2 border-b border-gray-700 cursor-pointer ${
                      currentVideo === idx ? 'bg-yellow-500 text-black font-bold' : 'hover:bg-gray-700'
                    }`}
                    onClick={() => setCurrentVideo(idx)}
                  >
                    <p>
                      Lecture {idx + 1}: {lecture?.title}
                    </p>
                    {role === 'ADMIN' && (
                      <button
                        onClick={() => onLectureDelete(state?._id, lecture?._id)}
                        className="text-red-500 ml-2"
                      >
                        Delete
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right section for playing videos and displaying course details */}
            <div className="flex-1 flex flex-col items-center bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <ReactPlayer
                  url={lectures[currentVideo]?.lecture?.secure_url}
                  className="absolute top-0 left-0 w-full h-full"
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="mt-4 sm:mt-6 w-full text-sm sm:text-base">
                <h1 className="text-yellow-500 text-lg sm:text-xl md:text-2xl font-semibold">
                  Title: {lectures[currentVideo]?.title}
                </h1>
                <p className="text-white mt-2">
                  <span className="font-bold">Description: </span>
                  {lectures[currentVideo]?.description}
                </p>
              </div>
            </div>
          </div>
        ) : (
          role === 'ADMIN' && (
            <button
              onClick={() => navigate('/course/addlecture', { state: { ...state } })}
              className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold text-sm"
            >
              Add New Lecture
            </button>
          )
        )}
      </div>
    </HomeLayout>
  );
};

export default DisplayLecture;
