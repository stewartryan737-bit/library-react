import React from "react";
import Book from './ui/Books';
import { books } from '../data';

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2 className="section__title">
            Explore more<span className="purple">Books</span>
          </h2>
          <a href="/Books">
            <button className="btn">
              Explore books
            </button>
          </a>
          </div>
      </div>
    </section>
  );
};

export default Explore;