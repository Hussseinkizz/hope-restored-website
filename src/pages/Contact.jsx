import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us with any questions.</p>
      </section>

      {/* Contact Information & Email Button */}
      <section className="contact-container">
        <div className="email-section">
          <h2>Send Us a Message</h2>
          <p>Click the button below to send us an email.</p>
          <a href="mailto:info@hoperestoreduganda.org" className="email-button">
            Send Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

