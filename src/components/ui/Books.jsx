import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Books = ({ book }) => {
  return (
   <div className="book">
            <a href="">
              <figure className="book__img--wrapper">
                <img src= {book.url} alt={book.title} className="book__img" />
              </figure>
            </a>
            <div className="book__title">
              <a href="/" className="book__title--link">{book.title}</a>
            </div>
            <div className="book__rating">
              {
              new Array(Math.floorbook.rating).fill(0).map((_, index) => (
                <FontAwesomeIcon key={index} icon={index < book.rating ? "star" : "star-o"} />
              ))
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