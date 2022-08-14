import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";

import styles from "./Header.module.scss";

function Header({ searchValue, setSearchValue }) {
  const [showCart, setShowCart] = React.useState(false);

  return (
    <div className={styles.header}>
      <Cart showCart={showCart} setShowCart={setShowCart} />

      <div className={styles.header__left}>
        <Link to="/">
          <h1 onClick={() => window.scrollTo(0, 0)}>E-SHOP</h1>
        </Link>

        {/* <li>
          <p className={styles.active}>EN</p>
        </li>
        <li onClick={() => alert("In development")}>
          <p>RU</p>
        </li> */}
      </div>
      {/* <Link to="/">
        <h1
          onClick={() => window.scrollTo(0, 0)}
          className={styles.header__center}
        >
          E-SHOP
        </h1>
      </Link> */}
      <ul className={styles.header__right}>
        {window.location.href === "http://localhost:3000/collection" ? (
          <li>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </li>
        ) : undefined}

        <li>
          <Link to="/login">
            <p>LOGIN</p>
          </Link>
        </li>
        <li onClick={() => alert("In development")}>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 6.86222C21 8.4087 20.4062 9.8941 19.3458 10.9929C16.9049 13.523 14.5374 16.1613 12.0053 18.5997C11.4249 19.1505 10.5042 19.1304 9.9488 18.5547L2.65376 10.9929C0.448748 8.7072 0.448748 5.01723 2.65376 2.73157C4.88044 0.42345 8.50794 0.42345 10.7346 2.73157L10.9998 3.00642L11.2648 2.73173C12.3324 1.6245 13.7864 1 15.3053 1C16.8242 1 18.2781 1.62444 19.3458 2.73157C20.4063 3.83045 21 5.31577 21 6.86222Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </li>
        <li onClick={() => setShowCart(!showCart)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6L2.25 3.5M3 6H22L19 16H6L3 6Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
}

export default Header;
