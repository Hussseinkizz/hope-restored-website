import React from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";
import "../styles/blogdetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((blog) => blog.id === parseInt(id, 10));

  if (!post) {
    return <h2>Blog Post Not Found</h2>;
  }

  return (
    <div className="blog-detail">
      <div className="blog-image">
        <img src={post.image} alt={post.title} className="blog-image" />
      </div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/blog" className="back-button">
        ← Back to Blog
      </Link>
    </div>
  );
};

export default BlogDetail;

