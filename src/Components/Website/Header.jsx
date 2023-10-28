import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            NidTourism
          </span>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-0 md:p-0 mt-4 md:p-0 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block p-2 text-white hover:text-green-700 md:bg-transparent md:text-green-700 dark:text-white md:dark-text-green-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block p-2 text-white hover:text-green-700 md:bg-transparent md:border-0 md:hover-text-green-700 dark:text-white md:dark-text-green-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent"
                >
                  Blog
                </Link>
              </li>
              <li>
  <Link
    to="/login"
    className="block p-2 text-white bg-green-500 hover:bg-green-700 rounded-md shadow-md dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800"
  >
    Login \ Sign Up
  </Link>
</li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
