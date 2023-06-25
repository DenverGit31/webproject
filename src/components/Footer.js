import React from "react";
import { FooterLink } from "./FooterLink";
import { socialLink } from "./SocislLink";

const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          {FooterLink.map((Flink) => {
            return (
              <li key={Flink.id}>
                <a href={Flink.href} className="footer-link">
                  {Flink.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {socialLink.map((links) => {
            return (
              <li key={links.id}>
                <a
                  href={links.href}
                  target={links.target}
                  className="footer-icon"
                >
                  <i className={links.className}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
