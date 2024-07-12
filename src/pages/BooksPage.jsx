import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./BooksPage.css";
import { books  } from "../data.js";
import Book from "../components/Book.jsx";
import { useState, useEffect } from "react";
import ScrollToTop from '../components/ScrollToTop.js';

function BooksPage( {cartData} ) {
  const [booksHtml, setBooksHtml] = useState([]);

  function renderBooks(event) {
    const tempBooksHtml = [];
    var bookArray = books;
    const filter = event.target.value;

    if (filter === "LOW_TO_HIGH") {
      bookArray.sort(
        (a, b) =>
          (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
      );
    } else if (filter === "HIGH_TO_LOW") {
      bookArray.sort(
        (a, b) =>
          (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
      );
    } else if (filter === "RATING") {
      bookArray.sort((a, b) => b.rating - a.rating);
    }

    for (let i = 0; i < bookArray.length; i++) {
      tempBooksHtml.push(<Book bookdata={bookArray[i]} key={i}></Book>)
    }
    setBooksHtml(tempBooksHtml);
    return tempBooksHtml;
  }

  useEffect(() => {
    const tempBooksHtml = [];
    const bookArray = books;
    for (let i = 0; i < bookArray.length; i++) {
      tempBooksHtml.push(<Book bookdata={bookArray[i]} key={i}></Book>)
    }
    setBooksHtml(tempBooksHtml);
  }, []);

  return (
    <div className="bookspage">
      <Nav cartData={cartData}></Nav>
      <div className="bookspage__content">
        <div className="bookspage__container">
          <h2 className="books__title">
            All <span className="text--purple">Books</span>
          </h2>
          <select id="filter" defaultValue={'Default'} onChange={renderBooks}>
            <option value="Default" disabled>
              Sort
            </option>
            <option value="LOW_TO_HIGH">Price: Lowest</option>
            <option value="HIGH_TO_LOW">Price: Highest</option>
            <option value="RATING">Rating</option>
          </select>
        </div>
        <div className="books">
          {booksHtml}
      </div>
      </div>
      <Footer></Footer>
      <ScrollToTop />
    </div>
  );
}

export default BooksPage;
