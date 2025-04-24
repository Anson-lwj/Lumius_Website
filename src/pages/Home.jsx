import React from 'react';

function Home() {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '600px',
          padding: '2rem 3rem 6rem 2rem',
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
            Revolutionizing vascular imaging with photoacoustic technology.
          </p>
        </div>

        {/* Video positioned in the bottom-right corner */}
        <video
          src="/images/4_Waves_3D.mp4"
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
        </video>
      </section>
    </main>
  );
}

export default Home;
