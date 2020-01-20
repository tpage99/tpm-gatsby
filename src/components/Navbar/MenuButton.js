import React from "react";

import "./Navbar.css";

const MenuButton = props => (
  <button className="app-menu no-print" onClick={props.drawerClickHandler}>
    ||Menu||
  </button>
);

export default MenuButton;
