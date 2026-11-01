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
}

  function addToCart(book) {
   

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
