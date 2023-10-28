import React, { useState } from 'react';

// Sample blog data (replace with your actual data)
const blogs = [
  {
    id: 1,
    name: 'Tourism in Petra',
    author: 'Nidal',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Petra_%2C_Al-Khazneh_2.jpg/2238px-Petra_%2C_Al-Khazneh_2.jpg',
  },
  {
    id: 2,
    name: 'Tourism in Wadi Rum',
    author: 'Nedal Raed',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/322485119.jpg?k=586d63904a541e2f3f4540be3ce42f8007ec150c26e0c2964006bb9d7e57ec7b&o=&hp=1',
  },
  {
    id: 3,
    name: 'Tourism in the Roman amphitheater',
    author: 'Nedal',
    imageUrl: 'https://www.jdfshops.com/sites/default/files/2019-11/dbac1e25-0ac2-47c3-add6-aa9d4d1a4312.png',
  },
  {
    id: 4,
    name: 'Tourism in Petra',
    author: 'Nidal',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Petra_%2C_Al-Khazneh_2.jpg/2238px-Petra_%2C_Al-Khazneh_2.jpg',
  },
  {
    id: 5,
    name: 'Tourism in Wadi Rum',
    author: 'Nedal Raed',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/322485119.jpg?k=586d63904a541e2f3f4540be3ce42f8007ec150c26e0c2964006bb9d7e57ec7b&o=&hp=1',
  },
  {
    id: 6,
    name: 'Tourism in the Roman amphitheater',
    author: 'Nedal',
    imageUrl: 'https://www.jdfshops.com/sites/default/files/2019-11/dbac1e25-0ac2-47c3-add6-aa9d4d1a4312.png',
  },
  {
    id: 7,
    name: 'Tourism in Petra',
    author: 'Nidal',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Petra_%2C_Al-Khazneh_2.jpg/2238px-Petra_%2C_Al-Khazneh_2.jpg',
  },
  {
    id: 8,
    name: 'Tourism in Wadi Rum',
    author: 'Nedal Raed',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/322485119.jpg?k=586d63904a541e2f3f4540be3ce42f8007ec150c26e0c2964006bb9d7e57ec7b&o=&hp=1',
  },
  {
    id: 9,
    name: 'Tourism in the Roman amphitheater',
    author: 'Nedal',
    imageUrl: 'https://www.jdfshops.com/sites/default/files/2019-11/dbac1e25-0ac2-47c3-add6-aa9d4d1a4312.png',
  },
  // Add more blog objects as needed
];

const itemsPerPage = 6; // Number of blogs to show per page

function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:grid-cols-1">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {currentBlogs.map((blog) => (
              <div key={blog.id} className="max-w-md mx-auto rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
                <img src={blog.imageUrl} alt={blog.name} className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{blog.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">Author: {blog.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center my-4">
        {[...Array(Math.ceil(blogs.length / itemsPerPage)).keys()].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={`mx-1 px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-700 ${
              currentPage === number + 1 ? 'bg-green-700' : ''
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
