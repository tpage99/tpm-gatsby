import React from 'react';

import './Navbar.css';

const appnav = props => (
  <header className="app-nav">
    <nav className="navbar_navigation">
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

export default appnav;
