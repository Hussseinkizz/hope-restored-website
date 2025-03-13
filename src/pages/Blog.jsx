import React from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";

const blogPosts = [
  {
    id: 1,
    title: "How Education Can Transform Lives",
    description:
      "Education is a powerful tool in breaking the cycle of poverty, creating opportunities for children and adults alike.",
    image: "/assets/tinified/IMG_0477.JPG",
    content: `Nalugo Jorine is a bright and determined girl who lives with her father, Mr. Musisi Denis, and two relatives, Nambasumba Jovia and Katongole Joram. Life hasn’t been easy for her since her mother left for Kampala two years ago and never returned. She misses her mother deeply and often wishes she could come back to visit.
      Despite this, Jorine remains focused on her education. She loves doing her homework and reading the Bible, as her father encourages them to share God’s Word at home. Her favorite scripture, Psalms 103:2-3, reminds her to always be grateful for God’s blessings and healing.
      Jorine dreams of becoming a lecturer in the future. She values education and feels heartbroken whenever she misses school. That’s why she was so happy when Hope Restored Uganda supported her with school supplies like books and pencils. Seeing her father’s joy during the Back-to-School outreach made her feel loved and cared for.
      To Jorine, Hope Restored is more than just an organization—it is a family that has embraced her with love and support. With faith, education, and a strong community around her, she believes she can achieve her dreams and inspire others along the way.`,
  },
  {
    id: 2,
    title: "Making Menstrual Kits accessible for all women",
    description:
      " Menstrual hygiene is a matter of dignity, not just necessity.",
    image:
      "/assets/tinified/WhatsApp Image 2025-03-13 at 13.45.55_ca0314b6.jpg",
    content: `At Hope Restored Uganda, we believe that menstrual hygiene is a matter of dignity, not just necessity. 
    Many girls in underprivileged communities miss school due to a lack of sanitary products, clean water, and proper hygiene education. 
    Through our Menstrual Hygiene Program, we provide reusable sanitary pads, hygiene kits, and awareness sessions to ensure that every girl can manage her period safely and confidently. 
    By supporting this initiative, you help keep girls in school and empower them to reach their full potential.
    Menstruation should never be a source of shame or limitation. At Hope Restored Uganda, we educate both girls and boys about menstrual health to break the stigma and create supportive environments in schools and communities. Through our outreach programs, we engage teachers, parents, and community leaders to encourage open conversations and ensure that no girl feels ashamed or excluded because of her period. Your support helps us continue these awareness campaigns, making menstrual health a normal and respected part of life.`,
  },
  {
    id: 3,
    title: "Memorable Christmas for every child",
    description:
      "Cultivating joy and belonging during christmas for all children.",
    image:
      "/assets/tinified/WhatsApp Image 2025-03-13 at 14.03.11_0fc10945.jpg",
    content: `For many families in our community, Christmas comes and goes like any other day, with little to no celebration. At Hope Restored Uganda, we step in to make Christmas a time of joy and belonging. We host a special Christmas gathering where underprivileged children and their families receive gifts, enjoy meals, and take part in worship and fellowship. It’s more than a celebration—it’s a way of demonstrating Christ’s love and bringing renewed hope to those who need it most.`,
  },
];


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


