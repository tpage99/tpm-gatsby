import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navbar.css';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="navbar_logo">
        <a href="/">The Logo</a>
      </div>
      <div className="spacer" />
      <div className="navbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar_navigation-items">
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
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
