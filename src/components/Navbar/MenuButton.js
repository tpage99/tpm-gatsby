import React from "react";

import "./Navbar.css";

const MenuButton = props => (
  <button className="app-menu no-print" onClick={props.drawerClickHandler} style={{ color: `#ecf0f1` }}>
    Menu
  </button>
);

export default MenuButton;
