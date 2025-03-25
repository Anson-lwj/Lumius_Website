import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroVideo from '../images/Black 3D.30.mp4';

function Home() {
  return (
    <>
      <Navbar />
      <main style={{ margin: 0, padding: 0 }}>
        {/* Hero Section */}
        <section
          style={{
            position: 'relative',
            minHeight: '600px',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',    // Vertical center
            justifyContent: 'center' // Horizontal center
          }}
        >
          {/* Centered text block */}
          <div style={{ maxWidth: '600px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Welcome to Lumius Imaging
            </h1>
            <p style={{ fontSize: '1rem' }}>
              Revolutionizing imaging with photoacoustic technology.
            </p>
          </div>

          {/* Video positioned in the bottom-right corner */}
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              width: '250px',
              height: 'auto'
            }}
          >
            Your browser does not support the video tag.
          </video>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
