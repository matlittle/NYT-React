import React from 'react';
import { Link } from "react-router-dom";

// Global navbar for page

const Navbar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className={window.location.pathname === "/" ? "active" : ""}>
            <Link to="/">Search</Link>
          </li>
          <li className={window.location.pathname === "/saved" ? "active" : ""}>
            <Link to="/saved">Saved Articles</Link>
          </li>
        </ul>
    </div>
  </nav>
)

export default Navbar;
