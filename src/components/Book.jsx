import React from "react";
import "./Book.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { useState } from "react";

function Book({ bookdata }) {
  //Fake API Call delay to display skeleton loading state
  // const [isLoaded, setIsLoaded] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 0)
  // }, []);
  const isLoaded = true;

  function ratingsHTML(rating) {
    let ratingHTML = [];
    for (let i = 0; i < Math.floor(rating); ++i) {
      ratingHTML.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
    if (!Number.isInteger(rating)) {
      ratingHTML.push(<FontAwesomeIcon icon={faStarHalfAlt} key={5} />);
    }
    return ratingHTML;
  }

  const rating = ratingsHTML(bookdata.rating);

  const link = "/Books/" + bookdata.id + "#";

  return (
    <div className="book">
      {isLoaded ? <Link to={link} className="book__container">
        <div className="book__img--container">
          <img
            src={bookdata.url}
            alt={bookdata.title}
            className="book__img"
          ></img>
        </div>
        <h2 className="book__title">{bookdata.title}</h2>
        <div className="book__stars">{rating}</div>
        <div className="book__price--container">
          {bookdata.salePrice && (
            <p className="discount">${bookdata.originalPrice.toFixed(2)}</p>
          )}
          {bookdata.salePrice && (
            <p className="book__price">${bookdata.salePrice.toFixed(2)}</p>
          )}
          {!bookdata.salePrice && (
            <p className="book__price">${bookdata.originalPrice.toFixed(2)}</p>
          )}
        </div>
      </Link> :
      <div className="skeleton__container">
        <div className="skeleton__img"></div>
        <div className="skeleton__title"></div>
        <div className="skeleton__rating"></div>
        <div className="skeleton__price"></div>
      </div>}
    </div>
  );
}

export default Book;
