import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import BookInfo from "./Pages/BookInfo";
import { books } from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/books/1" element={<BookInfo books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
