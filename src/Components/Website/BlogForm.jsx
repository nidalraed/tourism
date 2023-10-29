import React, { useState } from 'react';
import Axios from 'axios';
import '../../App.css'; //

function BlogForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState(''); 
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('author', author);
      formData.append('imageUrl', imageUrl); 

      const response = await Axios.post('/http://127.0.0.1:3000/blog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setSuccessMessage('Blog submitted successfully.');
        setTitle('');
        setDescription('');
        setAuthor('');
        setImageUrl(''); 
      }
    } catch (error) {
      setErrorMessage('Error submitting the blog. Please try again.');
    }
  };

  return (
    <div className="BlogForm">
      <form>
        <div>
          <label>Blog Title:</label>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Blog Description:</label><br></br>
          <textarea
            placeholder="Blog Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author Name:</label>
          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL :</label>
          <input
            type="url"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button onSubmit={handleFormSubmit} type="submit">Submit Blog</button>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
}

export default BlogForm;
