import React from "react";

import "./Nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function Nav( {cartData} ) {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  var cartLength = 0;
  cartData.forEach((e) => cartLength += e.quantity)

  return (
    <div className="nav">
      <nav>
        <Link to="/" className="nav__link--button">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Library.svg`}
            alt="library logo"
            className="logo"
          ></img>
        </Link>
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/" className="nav__link--button">
              Home
            </Link>
          </li>
          <Link to="/Books" className="nav__link">
            <div className="nav__link--button">
              Books
            </div>
          </Link>
          <div className="nav__link nav__link--cart">
            <Link to="/Cart" className="nav__link--button">
              <FontAwesomeIcon icon={faCartShopping} />
              {cartLength > 0 && <span className="cart__length">{cartLength}</span>}
            </Link>
          </div>
        </ul>
        <button className="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="btn__menu--list">
            <Link to="/" className="btn__menu--item" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/Books" className="btn__menu--item" onClick={closeMenu}>
              Books
            </Link>
            <Link to="/Cart" className="btn__menu--item" onClick={closeMenu}>
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
