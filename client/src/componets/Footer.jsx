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
      <footer className="relative left-0 bottom-0 w-full py-7 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20">
        <section className="text-center sm:text-left text-base sm:text-lg mb-4 sm:mb-0">
          Copyright {new Date().getFullYear()} | All rights reserved
        </section>
        <section className="flex flex-col sm:flex-row items-center justify-between gap-5 text-base sm:text-lg mb-4 sm:mb-0">
          <Link to="/privacy">
            <a className="hover:underline">Privacy & Policy</a>
          </Link>
          <Link to="/refund">
            <a className="hover:underline">Refund Policy</a>
          </Link>
          <Link to="/terms-condition">
            <a className="hover:underline">Terms And Conditions</a>
          </Link>
        </section>
        <section className="flex items-center justify-center gap-5 text-2xl text-white">
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
