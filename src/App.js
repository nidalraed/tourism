import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Website/Header';
import Home from './Components/Website/Home';
import Footer from './Components/Website/Footer';
import BlogForm from './Components/Website/BlogForm';
import SignUp from './Components/Users/SignUp';
import Login from './Components/Users/Login';
import Blogs from './Components/Website/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/blogform" element={<BlogForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/signup" element={<SignUp/> } />
          <Route path="/login" element={<Login/> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

