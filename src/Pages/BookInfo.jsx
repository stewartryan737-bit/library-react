import React from "react";

const BookInfo = ({ books }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
            <div className="row">
              <div className="books__selected--top">
                <h2 className="section__title books__header--title">Book Info</h2>
              </div>
            </div>
          </div>
        </main>
    </div>
  
  );
};

export default BookInfo;