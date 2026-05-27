import React from "react";

const User = ({ width = 36, height = 36, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 29"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.5 14.25C17.2129 14.25 20.25 11.0437 20.25 7.125C20.25 3.20632 17.2129 0 13.5 0C9.78715 0 6.75 3.20632 6.75 7.125C6.75 11.0437 9.78715 14.25 13.5 14.25ZM13.5 17.8125C9.02827 17.8125 0 20.2173 0 24.9375V28.5H27V24.9375C27 20.2173 17.9717 17.8125 13.5 17.8125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default User;
