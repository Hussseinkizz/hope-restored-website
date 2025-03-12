import React from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";
import blogImage1 from "/assets/IMG-20240915-WA0159.jpg";
import blogImage2 from "/assets/IMG-20240915-WA0003.jpg";
import blogImage3 from "/assets/IMG-20241010-WA0025.jpg";

const blogPosts = [
  {
  id: 1,
  title: "Restoring Hope: Providing Basic Needs to Underserved Communities",
  description:
    "HOPE RESTORED is committed to uplifting vulnerable communities by providing essential needs such as food, clean water, clothing, and shelter, ensuring a foundation for sustainable growth.",
  image: blogImage1,
  content: `For many families in underserved communities, access to basic needs such as food, clean water, clothing, and shelter remains a daily struggle. 
  At HOPE RESTORED, we believe that no one should have to choose between survival and a chance for a better future.

  Through our community outreach programs, we provide immediate relief by distributing food supplies, offering access to clean drinking water, and ensuring that families have clothing and safe living conditions. 
  But beyond immediate aid, our goal is to create long-term solutions that foster self-sufficiency.

  By integrating skills training, mentorship, and livelihood programs into our outreach, we empower individuals to break free from the cycle of poverty. 
  A child who receives a nourishing meal can focus on education. A mother with access to clean water can improve her family's health. A young adult equipped with vocational training can secure a stable income.

  Change begins with meeting the most basic human needs, and together, we can build a future where every individual has the opportunity to thrive. 
  Join us in making a difference—your support can provide hope, dignity, and lasting change for those in need.`
  },
  {
    id: 2,
    title: "Providing Food and Nutrition to Underprivileged Communities",
    description:
      "Our latest food and nutrition outreach program has brought hope and nourishment to hundreds of families in need.",
    image: blogImage2,
    content: `Food insecurity remains one of the biggest challenges in underprivileged communities, 
    affecting children, the elderly, and entire families. At HOPE RESTORED, we are committed to addressing 
    this crisis by providing nutritious meals and essential food supplies to those who need them most.

    Through our recent outreach program, we distributed food packages to hundreds of families, 
    ensuring they have access to healthy, balanced meals. We also provide nutritional education to help 
    families make the most of available resources. Proper nutrition is essential for physical and mental 
    development, especially for children, and we are dedicated to making sure no one goes hungry.

    Your support can help us reach even more families and expand our impact. Together, we can fight hunger 
    and bring hope to those in need.`
  },
  {
    id: 3,
    title: "How Education Can Transform Lives",
    description:
      "Education is a powerful tool in breaking the cycle of poverty, creating opportunities for children and adults alike.",
    image: blogImage3,
    content: `Education is the foundation of a brighter future. At HOPE RESTORED, we are passionate about 
    making quality education accessible to children in underserved communities. Our programs focus on 
    providing school supplies, scholarships, and mentorship to ensure that every child has a chance to learn 
    and thrive.

    For many children, access to education means the difference between a life of poverty and a future 
    filled with opportunities. We work closely with schools, parents, and communities to support 
    children through their educational journey. Beyond primary education, we also offer vocational 
    training and adult literacy programs to empower individuals with skills for lifelong success.

    Investing in education means investing in the future. Join us in transforming lives through 
    education and creating lasting change in our communities.`
  }
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


