import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-navy-950 text-navy-900 rounded-lg overflow-hidden shadow-lg mt-72">
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">{blog.title}</h2>
        <p className="text-lg">{blog.body}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
