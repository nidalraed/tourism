import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Website/Header';
import Home from './Components/Website/Home';
import Footer from './Components/Website/Footer';
import BlogForm from './Components/Website/BlogForm';
import SignUp from './Components/Users/SignUp';
import Login from './Components/Users/Login';
import Blogs from './Components/Website/Blog';
import BlogDetails from './Components/Website/BlogDetails';


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
  
  ];

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/blogform" element={<BlogForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs blogs={blogs} />} />
          <Route path="/blog/:id" element={<BlogDetails/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;