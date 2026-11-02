import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { books } from "./data";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart,{...book, quantity: 1}]);
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item =>  {
      return item.id === book.id
        ? {
          ...item,
          quantity: +quantity,
        }
        : item
   })
  );
}

  function removeItem(bookId) {
    setCart(cart.filter(item => item.id !== bookId));
  }

  function numberOfItems() {
    let counter= 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
