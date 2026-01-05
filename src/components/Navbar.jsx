import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="#home">
            <span className="logo-text">&lt;M.Yasir /&gt;</span>
          </a>
        </div>
        <p style={{color: 'white'}}>Navbar Component Loaded </p>
      </div>
    </nav>
  );
};

export default Navbar;