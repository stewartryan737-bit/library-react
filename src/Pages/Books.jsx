import React, { useState }   from "react";
import Book from "../components/ui/Books.jsx";



const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);
  function filterBooks(e) {
    const value = e.target.value;
    if (value === "LOW_TO_HIGH") {
      setBooks([...books].sort((a, b) => a.price - b.price));
    } else if (value === "HIGH_TO_LOW") {
      setBooks([...books].sort((a, b) => b.price - a.price));
    } else if (value === "RATING") {
      setBooks([...books].sort((a, b) => b.rating - a.rating));
    }
  }
  return (
    <div id="books__body" >
      <main id="books__main">
       <section>
        <div className="books__container">
          <div className="row">
            <div className="books__header">
              <h2 className="section__title books__header--title">All Books</h2>
              <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                <option value="DEFAULT" disabled>Sort</option>
                <option value="LOW_TO_HIGH">Price: Low to High</option>
                <option value="HIGH_TO_LOW">Price: High to Low</option>
                <option value="RATING">Rating</option>
               </select>
            </div>
            <div className="books">
              {books.map((book) => (
                <Book book={book} key={book.id} />
              ))}
             </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;