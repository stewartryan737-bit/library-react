import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { books } from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact component={<Home />} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/books/:id" render={() => <BookInfo books={books} />} />
          <Route path="/cart" render={() => <Cart books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
