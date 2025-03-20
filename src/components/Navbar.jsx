import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo Font/Black/Futura.png';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#000',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between', // Pushes logo left & links right
        alignItems: 'center'
      }}
    >
      {/* Left side (Logo) */}
      <Link to="/" style={{ display: 'inline-block' }}>
        <img
          src={logo}
          alt="Luminus Imaging Logo"
          style={{ height: '70px', width: 'auto' }}
        />
      </Link>

      {/* Right side (Navigation links) */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/solutions" style={{ color: '#fff', textDecoration: 'none' }}>Solutions</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link>
        <Link to="/contacts" style={{ color: '#fff', textDecoration: 'none' }}>Contacts</Link>
      </div>
    </nav>
  );
}

export default Navbar;
