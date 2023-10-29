import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.imageUrl} alt={blog.name} />
      <h2>{blog.name}</h2>
      <p>Author: {blog.author}</p>
      <Link to={`/blog/${blog.id}`}>Read More</Link>
      
    </div>
  );
}

export default BlogCard;
