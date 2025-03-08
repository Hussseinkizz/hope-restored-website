// import React from "react";
// import "../styles/blog.css";

// const blogPosts = [
//   {
//     title: "Empowering Women Through Skills Training",
//     description:
//       "HOPE RESTORED recently launched a skills training program for women in rural communities...",
//     image: "/assets/blog1.jpg",
//     link: "#",
//   },
//   {
//     title: "Providing Healthcare to Underprivileged Communities",
//     description:
//       "Our latest medical outreach program has impacted over 500 individuals...",
//     image: "/assets/blog2.jpg",
//     link: "#",
//   },
//   {
//     title: "How Education Can Transform Lives",
//     description:
//       "Education is a powerful tool in breaking the cycle of poverty. Our scholarship program is changing lives...",
//     image: "/assets/blog3.jpg",
//     link: "#",
//   },
// ];

// const Blog = () => {
//   return (
//     <div className="blog-page">
//       <section className="blog-hero">
//         <h1>Our Blog</h1>
//         <p>Stay updated with our latest stories and news.</p>
//       </section>

//       <section className="blog-list">
//         {blogPosts.map((post, index) => (
//           <div key={index} className="blog-card">
//             <img src={post.image} alt={post.title} />
//             <h2>{post.title}</h2>
//             <p>{post.description}</p>
//             <a href={post.link} className="read-more">
//               Read More →
//             </a>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Blog;

// import React from "react";
// import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
// import "../styles/blog.css";

// const blogPosts = [
//   {
//     title: "Empowering Women Through Skills Training",
//     description:
//       "HOPE RESTORED recently launched a skills training program for women in rural communities...",
//     image: "/assets/blog1.jpg",
//     link: "#",
//   },
//   {
//     title: "Providing Healthcare to Underprivileged Communities",
//     description:
//       "Our latest medical outreach program has impacted over 500 individuals...",
//     image: "/assets/blog2.jpg",
//     link: "#",
//   },
//   {
//     title: "How Education Can Transform Lives",
//     description:
//       "Education is a powerful tool in breaking the cycle of poverty. Our scholarship program is changing lives...",
//     image: "/assets/blog3.jpg",
//     link: "#",
//   },
// ];

// // Featured Post
// const featuredPost = {
//   title: "Making a Difference: How Our Volunteers Are Changing Lives",
//   description:
//     "A deep dive into the efforts of HOPE RESTORED volunteers and the impact they create every day.",
//   image: "src/assets/IMG_0069.JPG",
//   link: "#",
// };

// const Blog = () => {
//   return (
//     <div className="blog-page">
//       {/* Hero Section */}
//       <section className="blog-hero">
//         <h1>Our Blog</h1>
//         <p>Stay updated with our latest stories and news.</p>
//       </section>

//       {/* Featured Blog Post */}
//       <section className="featured-post">
//         <img src={featuredPost.image} alt={featuredPost.title} />
//         <div className="featured-content">
//           <h2>{featuredPost.title}</h2>
//           <p>{featuredPost.description}</p>
//           <a href={featuredPost.link} className="read-more">
//             Read More →
//           </a>
//         </div>
//       </section>

//       {/* Blog List */}
//       <section className="blog-list">
//         {blogPosts.map((post, index) => (
//           <div key={index} className="blog-card">
//             <img src={post.image} alt={post.title} />
//             <h2>{post.title}</h2>
//             <p>{post.description}</p>
//             <div className="social-share">
//               <Facebook className="icon" />
//               <Twitter className="icon" />
//               <LinkedIn className="icon" />
//             </div>
//             <a href={post.link} className="read-more">
//               Read More →
//             </a>
//           </div>
//         ))}
//       </section>

//       {/* Newsletter Subscription */}
//       <section className="newsletter">
//         <h3>Subscribe to Our Newsletter</h3>
//         <p>
//           Stay updated with the latest news, impact stories, and opportunities.
//         </p>
//         <input type="email" placeholder="Enter your email" />
//         <button>Subscribe</button>
//       </section>
//     </div>
//   );
// };

// export default Blog;

import React from "react";
import { Link } from "react-router-dom"; // Import React Router
import "../styles/blog.css";
import blogPosts from "../data/blogPosts";

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

// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/blog.css";

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

// const Blog = () => {
//   return (
//     <div className="blog-page">
//       <section className="blog-hero">
//         <h1>Our Blog</h1>
//         <p>Stay updated with our latest stories and news.</p>
//       </section>

//       <section className="blog-list">
//         {blogPosts.map((post) => (
//           <div key={post.id} className="blog-card">
//             <img src={post.image} alt={post.title} />
//             <h2>{post.title}</h2>
//             <p>{post.content.substring(0, 100)}...</p>
//             <Link to={`/blog/${post.id}`} className="read-more">
//               Read More →
//             </Link>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Blog;
