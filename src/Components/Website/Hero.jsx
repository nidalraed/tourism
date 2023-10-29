import React from 'react';
import { Link } from 'react-router-dom';

const backgroundImageStyle = {
  background: `url("https://i0.wp.com/blog.globaltribes.io/wp-content/uploads/2023/01/%D8%AF%D9%84%D9%8A%D9%84%D9%83-%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84-%D9%85%D9%86-%D8%A3%D8%AC%D9%84-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86.webp?fit=1200%2C700&ssl=1")`,
  backgroundSize: '100vw',
  backgroundPosition: 'center',
  height: '90vh',
  backgroundRepeat: 'no-repeat',
};

const whiteText = {
  color: 'white',
};

function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900" style={backgroundImageStyle}>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl" style={whiteText}>
            Welcome to our Blog
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl" style={whiteText}>
            Discover amazing stories about Jordan's top destinations.
          </p>
          <Link
            to="/blogform"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-500 border border-green-700 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-200 dark:text-white dark:border-green-700 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add a Blog
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
