import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./Cart.css";
import { Link } from "react-router-dom";
import { books as bookArray } from "../data";
import ScrollToTop from '../components/ScrollToTop.js';

function Cart({ cartData, updateCart }) {
  var cartItems = [];
  var price = 0;

  function getBook(id) {
    return bookArray.find((x) => x.id === parseInt(id));
  }

  function removeItem(id) {
    var tempCartData = cartData;
    if (cartData.find(x => x.id === parseInt(id))) {
      tempCartData = cartData.map(obj => {
        if (obj.id === parseInt(id)) {
          return { id: obj.id, quantity: 0};
        } 
        return obj;
      })
    }
    updateCart(tempCartData);
  }

  function changeItem(id, event) {
    var tempCartData = cartData;
    if (cartData.find(x => x.id === parseInt(id))) {
      tempCartData = cartData.map(obj => {
        if (obj.id === parseInt(id)) {
          return { id: obj.id, quantity: parseInt(event.target.value)};
        } 
        return obj;
      })
    }
    updateCart(tempCartData);
  }

  cartData.map((element) => {
    const book = getBook(element.id);
    if (element.quantity) {
      if (book.salePrice) {
        price += book.salePrice * element.quantity;
      } else {
        price += book.originalPrice * element.quantity;
      }

      cartItems.push(
        <div className="cart__item" key={element.id}>
          <div className="cart__item--book">
            <img
              src={book.url}
              alt="book img"
              className="cart__item--book-img"
            />
            <div className="cart__item--info">
              <p className="cart__item--title">{getBook(element.id).title}</p>
              <div className="cart__item--info-price">
                {book.salePrice && <p className="discount">${book.originalPrice.toFixed(2)}</p>}
                {book.salePrice && <p className="book__price">${book.salePrice.toFixed(2)}</p>}
                {!book.salePrice && <p className="book__price">${book.originalPrice.toFixed(2)}</p>}
              </div>
              <button className="remove" onClick={() => removeItem(element.id)}>Remove</button>
            </div>
          </div>
          <div>
            <input type="number" className="cart__item--quantity" defaultValue={element.quantity} onChange={e => changeItem(element.id, e)} min={1}></input>
          </div>
          <div className="cart__item--price">
            <p>{book.salePrice ? (book.salePrice * element.quantity).toFixed(2) : (book.originalPrice * element.quantity).toFixed(2)}</p>
          </div>
        </div>
      );
    }
    return "";
  });

  return (
    <div className="cart">
      <Nav cartData={cartData}></Nav>
      <div className="cart__content">
        <div className="cart__container">
          <h2 className="cart__title">Cart</h2>
          <div className="cart__labels">
            <p className="cart__label">Book</p>
            <p className="cart__label cart__label--mid">Quantity</p>
            <p className="cart__label">Price</p>
          </div>
          {cartItems.length > 0 ? (
            <div className="full__cart">
              <div className="cart__item--container">{cartItems}</div>
              <div className="cart__price--content">
                <div className="cart__price--container">
                  <div className="cart__price--divider"></div>
                  <div className="subtotal__container">
                    <p>Subtotal</p>
                    <p>${(0.9 * price).toFixed(2)}</p>
                  </div>
                  <div className="tax__container">
                    <p>Tax</p>
                    <p>${(0.1 * price).toFixed(2)}</p>
                  </div>
                  <div className="total__container">
                    <p>Total</p>
                    <p>${price.toFixed(2)}</p>
                  </div>
                  <button className="checkout">Checkout</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty__cart">
              <img
                src={`${process.env.PUBLIC_URL}/assets/empty_cart.svg`}
                alt="empty cart img"
                className="empty__cart--img"
              />
              <h2 className="empty__cart--title">
                You don't have any books in your cart!
              </h2>
              <div className="browse__container">
                <Link to="/Books" className="bookslink">
                  Browse Books
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
      <ScrollToTop />
    </div>
  );
}

export default Cart;
