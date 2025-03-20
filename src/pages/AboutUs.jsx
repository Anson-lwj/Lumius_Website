import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutUs() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transforming Imaging Solutions</h1>
          <p>
            At Luminus, we revolutionize preclinical research with cutting-edge
            photoacoustic imaging technology for better outcomes.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Mission</h2>
          <p>
            At Luminus Imaging, we are committed to transforming the landscape
            of preclinical imaging through non-invasive and high-resolution
            technologies. Our goal is to enhance the precision of imaging and
            provide efficient formats for research in biotech.
          </p>
        </div>
        <div className="image-placeholder">
          <img src="/path-to-your-mission-image.jpg" alt="Mission" />
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        <p>Meet the professionals and visionaries behind Luminus Imaging.</p>

        <div className="team-grid">
          <div className="team-member">
            <img src="/path-to-member1.jpg" alt="Team Member" />
            <h3>Tri Vu, Ph.D</h3>
            <p>Business & Engineering</p>
            <p>Duke BME</p>
          </div>
          <div className="team-member">
            <img src="/path-to-member2.jpg" alt="Team Member" />
            <h3>Luca Menozzi</h3>
            <p>R&D</p>
            <p>Duke BME</p>
          </div>
          <div className="team-member">
            <img src="/path-to-member3.jpg" alt="Team Member" />
            <h3>Chenhang Li</h3>
            <p>Operation & Business</p>
            <p>Duke MEMS</p>
          </div>
          <div className="team-member">
            <img src="/path-to-member4.jpg" alt="Team Member" />
            <h3>Jun Xia, Ph.D</h3>
            <p>Scientific Advisor</p>
            <p>University at Buffalo BME</p>
          </div>
          <div className="team-member">
            <img src="/path-to-member5.jpg" alt="Team Member" />
            <h3>Junjie Yao, Ph.D</h3>
            <p>Scientific Advisor</p>
            <p>Duke BME</p>
          </div>
          <div className="team-member">
            <img src="/path-to-member6.jpg" alt="Team Member" />
            <h3>Xxx Xxx</h3>
            <p>Xxx</p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="publications-section">
        <h2>Publications</h2>
        <p>Discover our latest research and contributions to medical imaging.</p>
        <div className="publication-list">
          <p>Coming Soon...</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;
