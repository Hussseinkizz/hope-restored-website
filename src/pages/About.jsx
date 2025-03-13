import React from "react";
import "../styles/about.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const testimonials = [
    {
      image: "/assets/tinified/IMG_0477.JPG",
      quote:
        "HOPE RESTORED changed my life by providing me with education and opportunities!",
      name: "Nalugo Jorine.",
    },
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop slides indefinitely
    speed: 1000, // Transition speed (1 second)
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Slide changes every 4 seconds
    arrows: false, // Remove manual navigation arrows
    fade: true, // Smooth fading transition between slides
    };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About HOPE RESTORED</h1>
        <p>Transforming lives, one step at a time.</p>
      </section>

      {/* Who We Are */}
      <section className="who-we-are">
        <div className="text-content">
          <h2>Who We Are</h2>
          <p>
            We are a non-profit organisation that promotes Jesus to
            underprivileged families and children through{" "}
            <strong>active love, Hope and Generosity</strong> to restore broken
            dreams for a transformed community and nation. By working closely
            with underprivileged communities, we provide access to{" "}
            <strong>
              quality learning opportunities, essential health care, and
              skill-building initiatives{" "}
            </strong>
            that foster self-sufficiency and long-term development. Through our
            outreach efforts, we aim to create a future where every individual,
            regardless of their background, has the{" "}
            <strong>opportunity to thrive and contribute to society</strong>.
          </p>
        </div>
        <img src="/assets/IMG-20240914-WA0120.jpg" alt="Who We Are" />
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h3>🎯 Our Mission</h3>
          <p>
            Empower families to become nurturing centers for love, hope and
            godly grooming <br/>
            and equip every child with skills that
            enable them thrive holistically through the help of God.
          </p>
        </div>
        <div className="vision">
          <h3>🌍 Our Vision</h3>
          <p>
            To promote Jesus to underprivileged families and children through <br/>
            active Love, Hope and Generosity
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Compassion</h3>
            <p>We believe in uplifting lives with kindness and care.</p>
          </div>
          <div className="value-item">
            <h3>Integrity</h3>
            <p>Transparency and accountability guide our every action.</p>
          </div>
          <div className="value-item">
            <h3>Empowerment</h3>
            <p>
              We equip communities with resources to drive sustainable change.
            </p>
          </div>
        </div>
      </section>

      <section className="impact">
        <h2>Our Impact</h2>
        <p>
          Over the past three years, we have conducted numerous community
          outreach programs, fostering positive social change.
        </p>
        <div className="impact-stats">
          <div className="stat">
            <h3>📖 30+</h3>
            <p>Education Education Beneficiaries</p>
          </div>
          <div className="stat">
            <h3>🏥 20+</h3>
            <p>Health Outreach programs held</p>
          </div>
          <div className="stat">
            <h3>💼 15+</h3>
            <p>Job training sessions provided</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <img src="assets/tinified/IMG_0598.JPG" alt="" />
            <h3>Bravel Lubega</h3>
            <p>Co-founder &</p>
            <p>Senior Community Coordinator</p>
          </div>
          <div className="team-card">
            <img src="assets/tinified/IMG_0456.JPG" alt="" />
            <h3>Mukalazi Brian</h3>
            <p>Managing Director &</p>
            <p>Project Coordinator</p>
          </div>
          <div className="team-card">
            <img src="assets/tinified/IMG_0448.JPG" alt="" />
            <h3>Waswa Jackson</h3>
            <p>Child Advocate &</p>
            <p>Assistant Community Coordinator</p>
          </div>
          <div className="team-card">
            <img src="assets/tinified/IMG_0450.JPG" alt="" />
            <h3>Bogere Robert</h3>
            <p>Pastor &</p>
            <p>Board Member</p>
          </div>
          <div className="team-card">
            <img src="assets/tinified/IMG_0387.JPG" alt="" />
            <h3>Jowie</h3>
            <p>Procurement officer</p>
          </div>
          <div className="team-card">
            <img src="assets/tinified/IMG_0329.JPG" alt="" />
            <h3>Joanna</h3>
            <p>Volunteer's Liason</p>
          </div>
          <div className="team-card">
            <img src="assets/tinified/_image.jpg" alt="" />
            <h3>Melchior</h3>
            <p>Organization Communicator</p>
          </div>
          <div className="team-card">
            <img src="assets/tinified/image_.jpg" alt="" />
            <h3>Zipporah</h3>
            <p>Administrator</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-img"
              />
              <p>"{testimonial.quote}"</p>
              <h4>— {testimonial.name}</h4>
            </div>
          ))}
        </Slider>
      </section>
      <section className="call-to-action">
        <div className="cta-content">
          <h2>Be a Part of Positive Change!</h2>
          <p>
            Join HOPE RESTORED in making a difference through education,
            healthcare, and empowerment programs. Together, we can create a
            brighter future.
          </p>
          <a
            href="https://tally.so/r/wALVAW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Get Involved</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
