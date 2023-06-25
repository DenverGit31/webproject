import React from "react";
import logo from "../images/logo.svg";
import { pageLinks } from "../data";
import { socialLink } from "./SocislLink";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          {/* Using object you can display all the data in a small line of code using map method */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* Using object you can display all the data in a small line of code using map method */}
          <ul className="nav-icons">
            {socialLink.map((slinks) => {
              return (
                <li key={slinks.id}>
                  <a
                    href={slinks.href}
                    target={slinks.target}
                    className="nav-icon"
                  >
                    <i className={slinks.className}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
