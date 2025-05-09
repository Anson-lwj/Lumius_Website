import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '1rem',
      marginTop: '2rem'
    }}>
      <p>© {new Date().getFullYear()} Lumius Imaging. All rights reserved.</p>
      <p>Email: contact@lumius-imaging.com</p>
    </footer>
  );
}

export default Footer;
