import React, { useState } from 'react';

const BlogPost = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
    maxWidth: '50rem',
    margin: '0 auto',
  };

  const inputStyles = {
    marginBottom: '1rem',
    padding: '0.5rem',
    borderRadius: '0.3rem',
    border: 'none',
    boxShadow: '0 0.1rem 0.2rem rgba(0, 0, 0, 0.1)',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyles = {
    backgroundColor: '#f1356d',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.3rem',
    cursor: 'pointer',
  };

  return (
    <form style={styles} onSubmit={handleSubmit}>
      <label>
        <b>Title:</b>
        <input
          style={inputStyles}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        <b>Content:</b>
        <textarea
          style={inputStyles}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <br />
      <button style={buttonStyles} type="submit">Create Post</button>
    </form>
  );
};

export default BlogPost;
