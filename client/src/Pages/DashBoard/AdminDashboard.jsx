import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layouts/HomeLayout";
import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { deleteCourse, getAllCourses } from "../../Redux/Slices/CourseSlice";
import { Pie, Bar } from "react-chartjs-2";
import { getStatsData } from "../../Redux/Slices/StatSlice";
import { getPaymentRecord } from "../../Redux/Slices/RazorpaySlice";
import { FaUser } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import { BiSolidVideos } from "react-icons/bi";


ChartJs.register(
  ArcElement,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip
);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allUserCount, subscribedCount } = useSelector((state) => state.stat);
  const { allPayments, finalMonths, monthlySalesRecord } = useSelector(
    (state) => state.razorpay
  );

  const userData = {
    labels: ["Registered User", "Enrolled User"],
    datasets: [
      {
        label: "User Details",
        data: [allUserCount, subscribedCount],
        backgroundColor: ["yellow", "green"],
        borderWidth: 1,
        borderColor: ["yellow", "green"],
      },
    ],
  };

  const salesData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales / Month",
        data: monthlySalesRecord,
        backgroundColor: ["rgb(255,99,132)"],
        borderWidth: 2,
      },
    ],
  };

  const myCourses = useSelector((state) => state.course.courseData);

  async function onCourseDelete(id) {
    if (window.confirm("Are you sure to delete the course?")) {
      const res = await dispatch(deleteCourse(id));
      if (res?.payload?.success) {
        await dispatch(getAllCourses());
      }
    }
  }

  const onWatchLecture = (id) => {
    navigate(`/course/lecture`);
  };

  useEffect(() => {
    (async () => {
      await dispatch(getPaymentRecord());
      await dispatch(getAllCourses());
      await dispatch(getStatsData());
    })();
  }, [dispatch]);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-5 flex flex-col gap-10 text-white">
        <h1 className="text-center text-3xl font-semibold text-yellow-500">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5">
          <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md bg-gray-800">
            <div className="w-80 h-80">
              <Pie
                data={userData}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  aspectRatio: 1,
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md bg-gray-700">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Registered Users</p>
                  <h3 className="text-2xl text-yellow-500 font-bold">
                    {allUserCount}
                  </h3>
                </div>
                <FaUser className="text-yellow-500 text-3xl" />
              </div>
              <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md bg-gray-700">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Subscribed Users</p>
                  <h3 className="text-2xl text-green-500 font-bold">
                    {subscribedCount}
                  </h3>
                </div>
                <FaUser className="text-green-500 text-3xl" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 p-5 shadow-lg rounded-md bg-gray-800">
            <div className="h-80 w-full relative">
              <Bar className="absolute bottom-h-80 w-full" data={salesData} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md bg-gray-700">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Subscription Count</p>
                  <h3 className="text-2xl text-yellow-500 font-bold">
                    {allPayments?.count}
                  </h3>
                </div>
                <FcSalesPerformance className="text-yellow-500 text-3xl" />
              </div>
              <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md bg-gray-700">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Total Revenue</p>
                  <h3 className="text-2xl text-yellow-500 font-bold">
                    {allPayments?.count * 10}
                  </h3>
                </div>
                <GiMoneyStack className="text-yellow-500 text-3xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-[5%] md:mx-[10%] w-[90%] md:w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-center text-3xl font-semibold">
              Courses Overview
            </h1>

            <button
              className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg"
              onClick={() => {
                navigate("/course/create");
              }}
            >
              Create Course
            </button>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="table-auto w-full text-white">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-4">S No</th>
                  <th className="px-6 py-4">Course Title</th>
                  <th className="px-6 py-4">Course Category</th>
                  <th className="px-6 py-4">Instructor</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4">Actions</th>
                  <th className="px-6 py-4">Watch Lecture</th>
                </tr>
              </thead>
              <tbody>
                {myCourses?.map((course, idx) => (
                    <tr key={course._id} className="bg-gray-800 hover:bg-gray-700">
                        <td className="px-6 py-4">{idx + 1}</td>
                        <td className="px-6 py-4">{course?.title}</td>
                        <td className="px-6 py-4">{course?.category}</td>
                        <td className="px-6 py-4">{course?.instructor}</td>
                        <td className="px-6 py-4">{course?.description}</td>
                        <td className="px-6 py-4">
                            <button
                                onClick={() => onCourseDelete(course._id)}
                                className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-white"
                            >
                                Delete
                            </button>
                        </td>
                        <td className="px-6 py-4">
                            <button
                                onClick={() => navigate("/course/lecture", {state: {...course}})}
                                className="bg-blue-500 hover:bg-blue-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-white"
                            >
                            <BiSolidVideos className="text-2xl" />
                            </button>
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default AdminDashboard;
