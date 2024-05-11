import React from 'react';

const BlogPostCard = ({ blog }) => {
  return (
    <div className="blog-item">
        <img src={blog.banner} alt={blog.title} />
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
        <p>Author: {blog.author}</p>
    </div>
  );
};

export default BlogPostCard;
