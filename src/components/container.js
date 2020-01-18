import React from "react";

import containerStyles from "./container.module.scss";
import Footer from "./footer";

export default ({ children }) => (
  <div className={containerStyles.container}>
    {children}
    <Footer />
  </div>
);
