import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">
          NidTourism
        </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-0 md:p-0 mt-4 md:p-0 md:flex-row md:space-x-4 md:mt-0 md:border-0">
            <li>
              <a href="#" className="block p-2 text-white hover:text-green-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 text-white hover:text-green-700">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 text-white hover:text-green-700">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 text-white hover:text-green-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-10" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="#" className="hover:underline text-white hover:text-green-700 dark:hover-text-white dark:hover-text-green-700">
          NidTourism™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
