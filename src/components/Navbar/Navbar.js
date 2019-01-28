import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navbar.css';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="navbar_logo">
        <a href="/">thePagesMedia</a>
      </div>
      <div className="spacer" />
      <div className="navbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar_navigation-items">
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
