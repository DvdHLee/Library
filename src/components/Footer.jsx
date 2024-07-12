import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <img
          src={`${process.env.PUBLIC_URL}/assets/Library.svg`}
          alt="footer library logo"
          className="footer__logo"
        ></img>
        <div className="footer__links">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <Link to="/Books" className="footer__link">
            Books
          </Link>
          <Link to="/Cart" className="footer__link">
            Cart
          </Link>
        </div>
        <p className="copyright">Copyright © 2024 Library</p>
      </footer>
    </div>
  );
}

export default Footer;
