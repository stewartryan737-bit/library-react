import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Books = ({ book }) => {
  return (
    <div className="book">
      <Link to="/Books/1">
        <figure className="book__img--wrapper">
          <img src={book.url} alt={book.title} className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/Books/1" className="book__title--link">
          {book.title}
        </Link>
      </div>
      <div className="book__rating">
        {
          new Array(Math.floor(book.rating)).fill(0).map((_, index) => 
            <FontAwesomeIcon icon="star" key={index} />)
          }
        {
         !Number.isInteger(book.rating) && (
           <FontAwesomeIcon icon="star-half-alt" />
         )
        }
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
};

export default Books;
