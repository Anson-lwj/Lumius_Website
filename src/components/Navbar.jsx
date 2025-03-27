import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo Font/Black/Futura.png';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#000',
        padding: '0.75rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Logo on the left */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="Luminus Imaging Logo"
          style={{ height: '90px', width: 'auto' }} // Adjust logo size here
        />
      </Link>

      {/* Home link on the right */}
      <div>
        <Link
          to="/"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1.3rem', // Adjust font size here
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#222')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
