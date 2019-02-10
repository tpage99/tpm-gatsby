import React from 'react';
import { Link } from 'gatsby';

import './HomeIcon.css';

const homenav = props => (
  <Link to="/" className="fab">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 224 200"
    >
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: `normal` }}
      >
        <path d="M0,224v-224h224v224z" fill="none" />
        <g fill="#4b4b4b">
          <path d="M112,19.59635l-102.66667,92.40365h28v84h46.66667v-65.33333h56v65.33333h46.66667v-84h28l-37.33333,-33.59635v-41.07031h-18.66667v24.26302z" />
        </g>
      </g>
    </svg>
  </Link>
);

export default homenav;
