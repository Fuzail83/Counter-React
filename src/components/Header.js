import React from "react";
import "../components/MainStyle.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="nav-menu">
          <li>
            <Link to="/counter" className="nav-link">
              Counter
            </Link>
          </li>
          <li>
            <Link to="/usereducercounter" className="nav-link">
              UseReducer Counter
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
