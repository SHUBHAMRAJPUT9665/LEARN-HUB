import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Your page content here */}
      </div>
      <footer className="relative left-0 bottom-0 w-full py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 px-4 sm:px-20">
        <section className="text-center sm:text-left text-base sm:text-lg mb-4 sm:mb-0">
          Copyright {new Date().getFullYear()} All rights reserved
        </section>
        <section className="flex items-center justify-center gap-5 text-2xl">
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
            <BsTwitter />
          </a>
          
          <a
            href="#"
            className="hover:text-[#0762C8] transition-all ease-in-out duration-300"
          >
            <BsLinkedin />
          </a>
        </section>
      </footer>
    </div>
  );
}

export default App;
