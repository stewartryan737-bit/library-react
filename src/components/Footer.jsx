import React from "react";
import logo from "../assets/Library.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
            <figure className="footer__logo">
              <img
                src={logo}
                className="footer__logo-img"
                alt="FES Library Logo"
              />
            </figure>
          </a>
          <div className="footer__list">
            <a href="/" className="footer__link">
              Home
            </a>
            <span className="footer__link no-cursor">About</span>
            <a href="/Books" className="footer__link">
              Books
            </a>
            <a href="/Cart" className="footer__link">
              Cart
            </a>
          </div>
          <div className="footer__copyright">
            &copy; {new Date().getFullYear()} FES Library. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
