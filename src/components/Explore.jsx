import React from "react";
import Book from './ui/Books';
import { books } from '../data';
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2 className="section__title">
            Explore more<span className="purple">Books</span>
          </h2>
          <Link to="/Books">
            <button className="btn">
              Explore books
            </button>
          </Link>
          </div>
      </div>
    </section>
  );
};

export default Explore;