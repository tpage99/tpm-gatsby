import React from 'react';

import './Navbar.css';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="navbar_logo">
        <a href="/">the pages media</a>
      </div>
      <div className="spacer" />
      <div className="navbar_toggle-button" />
      <div className="navbar_navigation-items">
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
