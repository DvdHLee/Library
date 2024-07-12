import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BooksPage from './pages/BooksPage';
import Cart from './pages/Cart';
import BookPage from './pages/BookPage';
import { useState, useEffect } from 'react';

function App() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    var tempCartData = [];
    for (let q = 1; q < 13; q++) {
      tempCartData.push({ id: q, quantity: 0});
    }
    setCartData(tempCartData);
  }, [])

  function addToCart(id) {
    var tempCartData = cartData;
    if (cartData.find(x => x.id === parseInt(id))) {
      tempCartData = cartData.map(obj => {
        if (obj.id === parseInt(id)) {
          return { id: obj.id, quantity: obj.quantity + 1};
        } 
        return obj;
      })
    }
    setCartData(tempCartData);
  }

  function updateCart(cartData) {
    setCartData(cartData);
  }

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home cartData={cartData}/>}></Route>
          <Route path='/Books' element={<BooksPage cartData={cartData}/>}></Route>
          <Route path='/Cart' element={<Cart cartData={cartData} updateCart={updateCart}/>}></Route>
          <Route path='/Books/:id' element={<BookPage cartData={cartData} addToCart={addToCart}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
