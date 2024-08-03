import React from 'react';
import HomeLayout from "../Layouts/HomeLayout";

const Contact = () => {
  return (
    <HomeLayout>
      <div>
        <section className="body-font relative bg-gray-900 text-gray-400">
          <div className="container mx-auto px-5 py-24">
            <div className="mb-12 flex w-full flex-col text-center">
              <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Us</h1>
              <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                Feel free to reach out to us! Whether you have a question, feedback, or a collaboration proposal, we'd love to hear from you.
              </p>
            </div>
            <div className="mx-auto md:w-2/3 lg:w-1/2">
              <div className="-m-2 flex flex-wrap">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input type="text" id="name" name="name" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input type="email" id="email" name="email" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
                  </div>
                </div>
                <div className="mt-4 w-full p-2">
                  <div className="relative">
                    <textarea id="message" name="message" className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Message"></textarea>
                    <label htmlFor="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Message</label>
                  </div>
                </div>
                <div className="w-full p-2">
                  <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">Send Message</button>
                </div>
                <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
                  <a href="mailto:shubhamrajput9665@gmail.com" className="text-indigo-400">shubhamrajput9665@gmail.com</a>
                  <p className="my-5 leading-normal">
                    Nashik, Maharashtra , India
                  </p>
                  <p className='my-5 leading-normal'>+91 9665768968</p>
                  <span className="inline-flex">
                    <a href="https://www.facebook.com" className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href="https://www.twitter.com" className="ml-4 text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com" className="ml-4 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com" className="ml-4 text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}

export default Contact;
