// import React from 'react'

// function Contact() {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact


// import React from "react";
// import "../styles/contact.css";

// const Contact = () => {
//   return (
//     <div className="contact-page">
//       <section className="contact-hero">
//         <h1>Contact Us</h1>
//         <p>We’d love to hear from you! Reach out to us with any questions.</p>
//       </section>

//       <section className="contact-container">
//         <div className="contact-info">
//           <h2>Get in Touch</h2>
//           <p><strong>Email:</strong> info@hoperestored.org</p>
//           <p><strong>Phone:</strong> +256 700 123 456</p>
//           <p><strong>Address:</strong> Kampala, Uganda</p>
//         </div>

//         <form className="contact-form">
//           <h2>Send Us a Message</h2>
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <textarea placeholder="Your Message" rows="5" required></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Contact;


// import React from "react";
// import "../styles/contact.css";

// const Contact = () => {
//   return (
//     <div className="contact-page">
//       <section className="contact-hero">
//         <h1>Contact Us</h1>
//         <p>We’d love to hear from you! Reach out to us with any questions.</p>
//       </section>

//       <section className="contact-container">
//         <div className="contact-info">
//           <h2>Get in Touch</h2>
//           <p>
//             <strong>Email:</strong> info@hoperestored.org
//           </p>
//           <p>
//             <strong>Phone:</strong> +256 700 123 456
//           </p>
//           <p>
//             <strong>Address:</strong> Kampala, Uganda
//           </p>
//         </div>

//         <div className="email-section">
//           <h2>Send Us a Message</h2>
//           <p>Click the button below to send us an email.</p>
//           <a href="mailto:info@hoperestored.org" className="email-button">
//             Send Email
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;


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
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> info@hoperestored.org</p>
          <p><strong>Phone:</strong> +256 700 123 456</p>
          <p><strong>Address:</strong> Kampala, Uganda</p>
        </div>

        <div className="email-section">
          <h2>Send Us a Message</h2>
          <p>Click the button below to send us an email.</p>
          <a href="mailto:info@hoperestored.org" className="email-button">
            Send Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

