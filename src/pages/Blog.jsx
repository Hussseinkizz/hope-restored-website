import React from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Empowering Women Through Skills Training",
      description:
        "HOPE RESTORED recently launched a skills training program for women in rural communities...",
      image: "/assets/IMG-20241010-WA0025.jpg",
      content: "This is the full content of the first blog post...",
    },
    {
      id: 2,
      title: "Providing Healthcare to Underprivileged Communities",
      description:
        "Our latest medical outreach program has impacted over 500 individuals...",
      image: "/assets/IMG-20241010-WA0025.jpg",
      content: "This is the full content of the second blog post...",
    },
    {
      id: 3,
      title: "How Education Can Transform Lives",
      description:
        "Education is a powerful tool in breaking the cycle of poverty...",
      image: "/assets/IMG-20241010-WA0025.jpg",
      content: "This is the full content of the third blog post...",
    },
  ];
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


