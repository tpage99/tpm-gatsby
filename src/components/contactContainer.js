import React from "react";

import containerStyles from "./container.module.scss";
import ContactFooter from "./contactFooter";

export default ({ children }) => (
  <div className={containerStyles.container}>
    {children}
    <ContactFooter />
  </div>
);
