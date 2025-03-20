import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Solutions() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Our Solutions</h1>
          <p>3D-DAT</p>
          <p>Offering a new generation of preclinical imaging.</p>
        </div>
      </section>

      {/* Main Solutions Section with Subsections */}
      <section className="solutions-container">
        <h2>Revolutionary Preclinical Imaging Solutions</h2>

        {/* Subsection: Product Overview */}
        <div className="subsection">
          <h3>Solutions Overview</h3>
          <p>
            Luminus Imaging offers cutting-edge three-dimensional diffractive acoustic tomography,
            tailored to meet preclinical needs for real-time, detailed imaging.
          </p>
        </div>

        {/* Subsection: Core Technology */}
        <div className="subsection">
          <h3>Core Technology</h3>
          <p>
            Lumius’s 3D-DAT technology redefines deep-tissue imaging by combining photoacoustic
            and ultrasound imaging with single-slit acoustic diffraction. Unlike traditional systems
            limited to 2D imaging, 3D-DAT delivers high-speed, near-isotropic 3D imaging with enhanced
            resolution, sensitivity, and a large field of view—all using an accessible, off-the-shelf
            transducer. With 50x faster reconstruction and proven success in biomedical research,
            3D-DAT is transforming imaging for life sciences.
          </p>
          <ul>
            <li>Single-Slit Acoustic Diffraction</li>
            <li>Synthetic Matrix Aperture via Elevational Scanning</li>
            <li>Fast Focal Line (FFL) Volumetric Reconstruction</li>
          </ul>
        </div>

        {/* Subsection: Why Choose Luminus? */}
        <div className="subsection">
          <h3>Why Choose Luminus?</h3>
          <p>
            Lumius’s 3D-DAT products provide cutting-edge imaging at a fraction of the cost—10 times
            less than traditional 3D medical imaging—while maintaining the same clarity. Our technology
            enhances efficiency, delivering faster and more reliable results for preclinical studies.
            With an easy-to-use, label-free design, we make advanced imaging accessible to all researchers.
            Experience the future of imaging tailored to your research needs.
          </p>
        </div>

        {/* Subsection: Features */}
        <div className="features-subsection">
          <h3>Key Features</h3>
          <div className="features-grid">
            <div className="feature">
              <h4>High-Efficient</h4>
              <p>High-throughput scanning completes in minutes per scan.</p>
            </div>
            <div className="feature">
              <h4>Accessible</h4>
              <p>Easy to use with no labeling required.</p>
            </div>
            <div className="feature">
              <h4>Affordable</h4>
              <p>Cost 10 times less than traditional 3D medical imaging</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Transform Your Imaging?</h2>
        <button>Contact Us</button>
      </section>

      <Footer />
    </>
  );
}

export default Solutions;
