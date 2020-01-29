import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <svg
            className="float"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="gold"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />{" "}
          </svg>
        </Link>
      </div>
      <div className="">
        <div className="navbar-start">
          <Link to="/about" className="navbar-item">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
