import React, { useState, useEffect, } from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [bgColor, setBgColor] = useState('#f1f1f1');

  const handleNewPost = (post) => {
    setBlogPosts([...blogPosts, post]);
  };

  const handleDeletePost = (postId) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== postId));
    alert('Deleted!');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(getRandomColor());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getRandomColor = () => {
    const colors = ['#f1f1f1', '#e6e6e6', '#d9d9d9', '#cccccc', '#bfbfbf'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const containerStyles = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
  };

  const headingStyles = {
    color: '#333',
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const postStyles = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px 0',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
  };

  const buttonStyles = {
    backgroundColor: '#e57373',
    color: '#ffd',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    marginTop: '10px',
    marginRight: "10px"
  };

  return (
    <div style={{ background: bgColor }}>
      <div style={containerStyles}>
        <h1 style={headingStyles}>My Blog</h1>
        <BlogPost onSubmit={handleNewPost} />
        {blogPosts.map((post) => (
          <div key={post.id} style={postStyles}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button
              style={buttonStyles}
              onClick={() => handleDeletePost(post.id)}
            >
              Delete Post
            </button>

            <button
              style={buttonStyles} 
              onClick={() => copyToClipboard(post.id)}
            >
              Copy Post
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
