import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeLayout from '../../Layouts/HomeLayout';
import { Chart as ChartJs, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { deleteCourse, getAllCourses } from '../../Redux/Slices/CourseSlice';
import { Pie } from 'react-chartjs-2';
import { getStatsData } from '../../Redux/Slices/StatSlice';
import { getPaymentRecord } from '../../Redux/Slices/RazorpaySlice';

ChartJs.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);

const AdminDashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { allUserCount, subscribedCount } = useSelector((state) => state.stat);
    const { allPayments, finalMonths, monthlySalesRecord } = useSelector((state) => state.razorpay);

    const userData = {
        labels: ["Registered User", "Enrolled User"],
        datasets: [
            {
                label: "User Details",
                data: [allUserCount, subscribedCount],
                backgroundColor: ['yellow', 'green'],
                borderWidth: 1,
                borderColor: ['yellow', 'green']
            }
        ]
    };

    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        fontColor: 'white',
        datasets: [
            {
                label: 'Sales / Month',
                data: monthlySalesRecord,
                backgroundColor: ['rgb(255,99,132)'],
                borderWidth: 2
            }
        ]
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

    useEffect(() => {
        (async () => {
            await dispatch(getPaymentRecord());
            await dispatch(getAllCourses());
            await dispatch(getStatsData());
        })();
    }, [dispatch]);

    return (
        <HomeLayout>
            <div className='min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white'>
                <h1 className='text-center text-3xl font-semibold text-yellow-500'>Admin Dashboard</h1>
                <div className='grid grid-cols-2 gap-5 m-auto mx-10'>
                    <div className='flex flex-col items-center gap-10 p-5 shadow-lg rounded-md'>
                        <div className='w-80 h-80'>
                            <Pie data={userData} />
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default AdminDashboard;
