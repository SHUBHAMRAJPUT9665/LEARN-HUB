import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../Redux/Slices/AuthSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  const user = typeof userData === 'string' ? JSON.parse(userData) : userData;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div className="bg-gray-200 text-black font-sans h-screen w-full flex flex-row justify-center items-center">
      <div className="card w-96 mx-auto bg-white shadow-xl hover:shadow">
        <img
          className="h-32 mx-auto rounded-full -mt-20 border-8 border-white"
          src={user?.avatar?.secure_url}
          alt=""
        />
        <div className="text-center mt-2 text-3xl font-medium">{user.fullName}</div>
        <div className="text-center mt-2 font-light text-sm">{user?.email}</div>
        <div className="text-center font-normal text-lg">{user.role}</div>
        <div className="px-6 text-center mt-2 font-light text-sm">
          <p>{/* Add any additional information here */}</p>
        </div>
        <hr className="mt-8" />
        <div className="flex p-4">
          <div className="w-1/2 text-center m-2">
            <button onClick={() => navigate('/change-Password')} className="bg-blue-500 text-sm text-white px-4 py-2 rounded hover:bg-blue-700">
              Change Password
            </button>
          </div>
          <div className="w-1/2 text-center m-2">
            <button onClick={() => navigate('/edit-profile')} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="text-center mt-4 font-light text-[20px]">
          Subscription: unActive
        </div>
      </div>
    </div>
  );
};

export default Profile;
