import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

function Footer() {
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      alert("In development");
    }
  };

  return (
    <div className={styles.footer}>
      <h1>E-SHOP</h1>
      <div className={styles.footer__center}>
        <div className={styles.footer__center__left}>
          <ul>
            <Link to="/collection">
              <li>SHOP</li>
            </Link>
            <Link to="/">
              <li onClick={() => window.scrollTo(0, 1010)}>COLLECTIONS</li>
            </Link>
            <Link to="/about">
              <li>ABOUT</li>
            </Link>
          </ul>
          <ul>
            <Link to="/about">
              <li>SHIPPING & RETURNS</li>
              <li>TERMS OF USE</li>
              <li>PRIVACY POLICY</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footer__center__right}>
          <div className={styles.footer__center__right__input}>
            <input
              placeholder="Enter your email to subscribe"
              onKeyDown={onKeyDown}
            />
            <svg
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
          </div>
          <div className={styles.footer__center__right__list}>
            <svg
              onClick={() => alert("In development")}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 12L12 15.5L17 12"
                stroke="#163f2c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 20V9.13238C2 8.42985 2.3686 7.77884 2.97101 7.41739L10.971 2.61739C11.6044 2.23738 12.3956 2.23738 13.029 2.6174L21.029 7.4174C21.6314 7.77884 22 8.42985 22 9.13238V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z"
                stroke="#163f2c"
                strokeWidth="1.5"
              />
            </svg>
            <svg
              onClick={() => alert("In development")}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="#163f2c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                stroke="#163f2c"
                strokeWidth="1.5"
              />
              <path
                d="M17.5 6.51L17.51 6.49889"
                stroke="#163f2c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              onClick={() => alert("In development")}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                stroke="#163f2c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 21C11 18 11 15 11 12C11 9.8125 11.5 8 15 8"
                stroke="#163f2c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 13H11H15"
                stroke="#163f2c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <p>© 2021 E-shop. All rights reserved.</p>
    </div>
  );
}

export default Footer;
