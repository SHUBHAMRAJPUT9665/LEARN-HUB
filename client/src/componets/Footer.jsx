import React from "react";
import { BsFacebook, BsInstagram, BsTwitterX, BsLinkedin } from "react-icons/bs";

function App() {
  return (
    <>
      <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20">
        <section className="text-lg text-red">
          Copyright {new Date().getFullYear()}| All rights reserved
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
