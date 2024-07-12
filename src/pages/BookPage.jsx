import React from "react";
import { useParams } from "react-router-dom";
import { books as bookArray } from "../data";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./BookPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Book from "../components/Book";
import { Link } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop.js';

function BookPage( {cartData, addToCart} ) {
  const selectedBookId = useParams().id;
  const selectedBook = bookArray.find((x) => x.id === parseInt(selectedBookId));
  const rating = [];
  const recommended = [];
  const price = [];

  //Build Rating html
  for (let i = 0; i < Math.floor(selectedBook.rating); ++i) {
    rating.push(<FontAwesomeIcon icon={faStar} key={i} />);
  }
  if (!Number.isInteger(selectedBook.rating)) {
    rating.push(<FontAwesomeIcon icon={faStarHalfAlt} key={5} />);
  }

  //Build Price html
  if (selectedBook.salePrice) {
    price.push(
      <p className="discount" key={1}>
        ${selectedBook.originalPrice.toFixed(2)}
      </p>
    );
    price.push(
      <p className="book__price" key={2}>
        ${selectedBook.salePrice.toFixed(2)}
      </p>
    );
  } else {
    price.push(
      <p className="book__price" key={1}>
        ${selectedBook.originalPrice.toFixed(2)}
      </p>
    );
  }

  //Build Recommended html (just displays next 4 books right now)
  var recBookIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3];
  recBookIds = recBookIds.slice(selectedBookId, parseInt(selectedBookId) + 4);
  bookArray.sort(
    (a, b) =>
      (a.id) - (b.id)
  );
  for (let i = 0; i < recBookIds.length; i++) {
    recommended.push(<Book bookdata={bookArray[recBookIds[i]]} key={i}></Book>);
  }

  //Update Cart
  function addedToCart() {
    addToCart(parseInt(selectedBookId));
  }

  return (
    <div className="bookpage">
      <Nav cartData={cartData}></Nav>
      <div className="bookpage__content">
        <div className="bookpage__content--container">
          <Link to="/Books" className="back">
            <FontAwesomeIcon icon={faArrowLeft} /> Books
          </Link>
          <div className="bookpage__container">
            <img
              src={selectedBook.url}
              alt="book img"
              className="bookpage__img"
            />
            <div className="bookpage__info">
              <h2 className="bookpage__title">{selectedBook.title}</h2>
              <div className="bookpage__rating">{rating}</div>
              <div className="bookpage__price">{price}</div>
              <p className="summary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                quae ipsum deleniti? Nulla quam laboriosam praesentium voluptas
                tempora quos minus, ea placeat debitis, laudantium libero magnam
                earum consectetur deserunt suscipit perferendis ad cum, ratione
                ipsa? Corporis facilis dolores ab explicabo id quaerat labore
                adipisci laudantium perferendis, ducimus vero. Reiciendis,
                fugiat.
              </p>
              <button className="add--to--cart" onClick={addedToCart}>Add to Cart</button>
            </div>
          </div>
          <div className="recommended__container">
            <h2 className="recommended__title">Recommended Books</h2>
            <div className="books">{recommended}</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <ScrollToTop />
    </div>
  );
}

export default BookPage;
