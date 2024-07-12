import React from "react";
import Nav from "../components/Nav";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBookOpen, faTags } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import Footer from "../components/Footer";
import { books as bookArray } from "../data";
import ScrollToTop from '../components/ScrollToTop.js';

function Home( {cartData} ) {
  return (
    <div className="home">
      <Nav cartData={cartData}></Nav>
      <section id="landing">
        <h2 className="landing__title">
          Australia's most awarded online library platform
        </h2>
        <h3 className="landing__subtitle">
          Find your dream book with{" "}
          <span className="text--purple">Library</span>
        </h3>
        <div className="browse__container">
          <Link to="/Books" className="bookslink">
            Browse Books
          </Link>
        </div>
        <img src={`${process.env.PUBLIC_URL}/assets/Undraw_Books.svg`} alt="" className="introimg"></img>
      </section>
      <section id="highlights">
        <h2 className="section__title">
          Why choose <span className="text--purple">Library?</span>
        </h2>
        <ul className="highlight__list">
          <li className="highlight">
            <div className="highlight__icon">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <h2 className="highlight__title">Easy and Quick</h2>
            <p className="highlight__description">
              Get access to the book you purchased online instantly
            </p>
          </li>
          <li className="highlight">
            <div className="highlight__icon">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <h2 className="highlight__title">10,000+ Books</h2>
            <p className="highlight__description">
              Library has books in all your favourite categories
            </p>
          </li>
          <li className="highlight">
            <div className="highlight__icon">
              <FontAwesomeIcon icon={faTags} />
            </div>
            <h2 className="highlight__title">Affordable</h2>
            <p className="highlight__description">
              Get your hands on popular books for as little as $10
            </p>
          </li>
        </ul>
      </section>
      <section id="featured">
        <h2 className="section__title" id="section__title--featured">
          Featured <span className="text--purple">Books</span>
        </h2>
        <div className="books">
          <Book bookdata={bookArray[0]}></Book>
          <Book bookdata={bookArray[1]}></Book>
          <Book bookdata={bookArray[2]}></Book>
          <Book bookdata={bookArray[3]}></Book>
        </div>
      </section>
      <section id="bookslist">
        <h2 className="section__title">
          Latest <span className="text--purple">Books</span>
        </h2>
        <div className="books">
          <Book bookdata={bookArray[4]}></Book>
          <Book bookdata={bookArray[5]}></Book>
          <Book bookdata={bookArray[6]}></Book>
          <Book bookdata={bookArray[7]}></Book>
          <Book bookdata={bookArray[8]}></Book>
          <Book bookdata={bookArray[9]}></Book>
          <Book bookdata={bookArray[10]}></Book>
          <Book bookdata={bookArray[11]}></Book>
        </div>
      </section>
      <section id="explore">
        <h2 className="section__title">
          Explore more <span className="text--purple">Books</span>
        </h2>
        <div className="browse__container">
          <Link to="/Books" className="bookslink">
            Browse Books
          </Link>
        </div>
      </section>
      <Footer></Footer>
      <ScrollToTop />
    </div>
  );
}

export default Home;
