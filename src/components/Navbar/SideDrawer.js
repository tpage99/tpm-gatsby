import React from "react";
import { Link } from "gatsby";

import "./SideDrawer.css";

const SideDrawer = props => (
  <div className="side-drawer">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <div>
      <button id="closer" onClick={props.click}>
        x
      </button>
    </div>
  </div>
);

export default SideDrawer;
