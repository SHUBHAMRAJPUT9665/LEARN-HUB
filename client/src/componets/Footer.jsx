import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <>
    <footer className="relative left-0 bottom-0 w-full py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 px-4 sm:px-20">
      <section className="text-center sm:text-left text-sm sm:text-base mb-4 sm:mb-0">
        Copyright {new Date().getFullYear()} | All rights reserved
      </section>
      <section className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-5 text-sm sm:text-base mb-4 sm:mb-0">
        <Link to="/privacy" className="hover:underline">
          Privacy & Policy
        </Link>
        <Link to="/refund" className="hover:underline">
          Refund Policy
        </Link>
        <Link to="/terms-condition" className="hover:underline">
          Terms And Conditions
        </Link>
      </section>
      <section className="flex items-center justify-center gap-3 sm:gap-5 text-sm sm:text-xl text-white">
        <a
          href="#"
          className="hover:text-blue-500 transition-all ease-in-out duration-300"
        >
          <BsFacebook />
        </a>
        <a
          href="#"
          className="hover:text-[#f77737] transition-all ease-in-out duration-300"
        >
          <BsInstagram />
        </a>
        <a
          href="#"
          className="hover:text-black transition-all ease-in-out duration-300"
        >
          <BsTwitterX />
        </a>
        <a
          href="#"
          className="hover:text-[#0762C8] transition-all ease-in-out duration-300"
        >
          <BsLinkedin />
        </a>
      </section>
    </footer>
  </>
  );
}

export default App;
