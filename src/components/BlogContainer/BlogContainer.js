import React from 'react';
import blogContainerStyles from './blogcontainer.module.scss';

export default ({ children }) => (
  <div className={blogContainerStyles.bcontainer}>{children}</div>
);
