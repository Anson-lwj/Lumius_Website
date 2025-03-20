import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import locationImg from '../images/duke_location.png'; // Correct image import

function Contacts() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We’re here to assist you with any inquiries.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-container">
        {/* Left: Contact Details */}
        <div className="contact-details">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> trivu169@gmail.com</p>
          <p><strong>Phone:</strong> +1 xxxxxxxxxx</p>
          <p><strong>Location:</strong> Durham, North Carolina</p>
        </div>

        {/* Right: Map */}
        <div className="map-placeholder">
          <img src={locationImg} alt="Office Location" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <p>We’re here to help you with your inquiries.</p>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" name="name" placeholder="Your name" />

          <label>Email:</label>
          <input type="email" name="email" placeholder="Your email" />

          <label>Message:</label>
          <textarea name="message" placeholder="Share your thoughts..."></textarea>

          <div className="form-check">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">I agree to the Terms</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default Contacts;
