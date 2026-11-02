import React, {useState, useEffect } from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";


const Cart = ({ cart, changeQuantity, removeItem }) => {
  const [total, setTotal] = useState(0);

  function handleRemoveItem(book) {
    removeItem(book.id);
  }
  useEffect(() => {
    const newTotal = cart.reduce((acc, book) => acc + (book.salePrice ? book.salePrice : book.originalPrice) * book.quantity, 0);
    setTotal(newTotal);
  }, [cart]);
  return (
    <div className="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              {cart.length > 0 ? (
                <>
                  <div className="cart__header">
                    <span className="cart__book">Book</span>
                    <span className="cart__quantity">Quantity</span>
                    <span className="cart__total">Price</span>
                  </div>
                  <div className="cart__body">
                    {cart.map((book) => {
                      return (
                    
                    
                    <div className="cart__item" key={book.id}>
                      <div className="cart__book">
                        <img src={book.url} alt="" className="cart__book--img" />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">${book.salePrice ? book.salePrice.toFixed(2) : book.originalPrice.toFixed(2)}</span>
                          <button className="cart__book--remove" onClick={() => handleRemoveItem(book)}>Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={book.quantity}
                          onChange={(e) => changeQuantity(book, e.target.value)}
                        />
                      </div>
                      <div className="cart__total">${((book.salePrice ? book.salePrice : book.originalPrice) * book.quantity).toFixed(2)}</div>
                    </div>
                      );
                     })}
                  </div>
                </>
              ) : (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>Your cart is empty</h2>
                  <Link to="/books">
                    <button className="btn">Browse Books</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>$1.00</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${(total * 1.1).toFixed(2)}</span>
                </div>
                <button className="btn btn__checkout no-cursor">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
