import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">React Table</div>
      <div className="links">
        <ul>
          <li>
            <Link to={"/pages/1"} className="navLinks">
              page 1
            </Link>
          </li>
          <li>
            <Link to={"/pages/2"} className="navLinks">
              Page 2
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
