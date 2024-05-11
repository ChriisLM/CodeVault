import React from "react";

const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    stroke="#fff"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 18.75V21M6 18.75V21M20.25 4.5H3.75a.75.75 0 0 0-.75.75V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18V5.25a.75.75 0 0 0-.75-.75ZM16.875 12H21" />
    <path d="M13.875 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
)
export default Logo