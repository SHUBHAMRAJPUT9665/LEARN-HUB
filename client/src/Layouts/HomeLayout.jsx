import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../componets/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/AuthSlice";

const HomeLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);
  const userStatus = useSelector((state) => state?.auth?.data?.subscription?.status)
  console.log(userStatus)
  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 0;
  }
  async function handleLogout(e) {
    e.preventDefault();
    const res = await dispatch(logout())
    navigate("/");
  }

  return (
    <div className="min-h-[90vh] bg-[#1D232A]">
      <div className="drawer absolute left-0 z-50 w-fit ">
        <input className="drawer-toggle" id="my-drawer" type="checkbox" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-4"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu h-[100%] p-4 w-48 sm:w-80 bg-base-300 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to="/admin/dashboard">Admin Dashboard</Link>
              </li>
            )}
             {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to="/video/class">Start Live Class</Link>
              </li>
            )}
            {isLoggedIn && userStatus === "active" && (
              <li>
                <Link to="/video/class">Join Live Class</Link>
              </li>
            )}
             {isLoggedIn && role === 'ADMIN' && (
                            <li>
                                <Link to="/course/create"> Create new course</Link>
                            </li>
                        )}
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {!isLoggedIn && (
              <li className=" mt-4  w-[90%] ">
                <div className="w-full  flex items-center justify-center">
                  <button className="btn btn-primary px-4 py-1 mr-3 font-semibold rounded-md ">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="btn btn-secondary px-4 py-1 ml-3 font-semibold rounded-md ">
                    <Link to="/signup">Sign Up</Link>
                  </button>
                </div>
              </li>
            )}

            {isLoggedIn && (
              <li className=" flex w-[90%] ">
                <div className="w-full  flex items-center justify-center">
                  <button className="btn btn-primary px-4 py-1 mr-3 font-semibold rounded-md ">
                    <Link to="/user/profile">Profile</Link>
                  </button>
                  <button className="btn btn-secondary px-4 py-1 ml-3 font-semibold rounded-md ">
                    <Link onClick={handleLogout} to="/logout">
                      logout
                    </Link>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
