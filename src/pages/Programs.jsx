import React, {useEffect} from "react";
import "../styles/programs.css";

const programsData = [
  {
    title: "Education Support",
    description:
      "We provide scholarships, school supplies, and mentorship to underprivileged children, empowering them for a brighter future.",
    image: "/assets/IMG-20241010-WA0025.jpg",
  },
  {
    title: "",
    description:
      "Through medical camps, healthcare supplies, and awareness programs, we ensure communities receive the medical care they need.",
    image: "/assets/IMG-20240914-WA0098.jpg",
  },
  {
    title: "Community Outreach",
    description:
      "We support women through skill development, entrepreneurship training, and mentorship programs to promote self-reliance.",
    image: "/assets/IMG-20240914-WA0114.jpg",
  },
  {
    title: "Food & Nutrition",
    description:
      "By providing nutritious meals and sustainable food programs, we help vulnerable families combat food insecurity.",
    image: "/assets/IMG-20240915-WA0003.jpg",
  },
];


const Programs = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".program-card");
    cards.forEach((card) => card.classList.add("appear"));
  }, []);

  return (
    <div className="programs-page">
      <section className="programs-hero">
        <h1>Our Programs</h1>
        <p>Empowering communities through targeted initiatives.</p>
      </section>

      <section className="programs-list">
        {/* Ensure programsData is being mapped */}
        {programsData.map((program, index) => (
          <div key={index} className={`program-card ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="program-image">
              <img src={program.image} alt={program.title} />
            </div>
            <div className="program-content">
              <h2>{program.title}</h2>
              <p>{program.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Programs;

