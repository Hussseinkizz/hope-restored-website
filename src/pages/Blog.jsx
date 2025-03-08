
import React from "react";
import { Link } from "react-router-dom"; // Import React Router
import "../styles/blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <h1>Our Blog</h1>
        <p>Stay updated with our latest stories and news.</p>
      </section>

      <section className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;


