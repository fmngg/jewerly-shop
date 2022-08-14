import React from "react";
import CartItem from "../CartItem/CartItem";

import classNames from "classnames";

import styles from "./Cart.module.scss";

function Cart({ showCart, setShowCart }) {
  return (
    <div
      className={classNames({
        [styles.overlay]: showCart === false,
        [styles.overlayVisible]: showCart === true,
      })}
    >
      <div className={styles.cart}>
        <svg
          onClick={() => setShowCart(!showCart)}
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 6.5L1 12"
            stroke="#163f2c"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className={styles.cart__top}>
          <h1>Cart (3)</h1>
          <p>REMOVE ALL</p>
        </div>
        <ul className={styles.cart__center}>
          <li>
            <CartItem />
          </li>
          <li>
            <CartItem />
          </li>
          <li>
            <CartItem />
          </li>
        </ul>
        <div className={styles.cart__bottom}>
          <div className={styles.total}>
            <p>Total</p>
            <p>$124</p>
          </div>
          <div className={styles.button}>ORDER NOW</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
