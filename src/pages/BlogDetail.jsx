// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "../styles/blogdetail.css";

// // Reuse the same blog data
// const blogPosts = [
//   {
//     id: 1,
//     title: "Empowering Women Through Skills Training",
//     image: "src/assets/IMG-20241010-WA0025.jpg",
//     content:
//       "This is the full content of the first blog post. It details the skills training program for women...",
//   },
//   {
//     id: 2,
//     title: "Providing Healthcare to Underprivileged Communities",
//     image: "src/assets/IMG-20241010-WA0025.jpg",
//     content:
//       "This is the full content of the second blog post. It explains our medical outreach program...",
//   },
//   {
//     id: 3,
//     title: "How Education Can Transform Lives",
//     image: "src/assets/IMG-20241010-WA0025.jpg",
//     content:
//       "This is the full content of the third blog post. It talks about our scholarship program...",
//   },
// ];

// const BlogDetail = () => {
//   const { id } = useParams(); // Get blog ID from URL
//   const post = blogPosts.find((blog) => blog.id === parseInt(id));

//   if (!post) {
//     return <h2>Blog Post Not Found</h2>;
//   }

//   return (
//     <div className="blog-detail">
//       <img src={post.image} alt={post.title} className="blog-image" />
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//       <Link to="/blog" className="back-button">
//         ← Back to Blog
//       </Link>
//     </div>
//   );
// };

// export default BlogDetail;

// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "../styles/blogdetail.css";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Empowering Women Through Skills Training",
//     description:
//       "HOPE RESTORED recently launched a skills training program for women in rural communities...",
//     image: "src/assets/IMG-20241010-WA0025.jpg",
//     content: "This is the full content of the first blog post...",
//   },
//   {
//     id: 2,
//     title: "Providing Healthcare to Underprivileged Communities",
//     description:
//       "Our latest medical outreach program has impacted over 500 individuals...",
//     image: "src/assets/IMG-20241010-WA0025.jpg",
//     content: "This is the full content of the second blog post...",
//   },
//   {
//     id: 3,
//     title: "How Education Can Transform Lives",
//     description:
//       "Education is a powerful tool in breaking the cycle of poverty...",
//     image: "src/assets/IMG-20241010-WA0025.jpg",
//     content: "This is the full content of the third blog post...",
//   },
// ];


// const BlogDetail = () => {
//   const { id } = useParams(); // Get blog ID from URL
//   const post = blogPosts.find((blog) => blog.id === parseInt(id)); // Find the correct blog post

//   if (!post) {
//     return <h2>Blog Post Not Found</h2>;
//   }

//   return (
//     <div className="blog-detail">
//       <img src={post.image} alt={post.title} className="blog-image" />
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//       <Link to="/blog" className="back-button">
//         ← Back to Blog
//       </Link>
//     </div>
//   );
// };

// export default BlogDetail;



import React from "react";
import { useParams, Link } from "react-router-dom";
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

