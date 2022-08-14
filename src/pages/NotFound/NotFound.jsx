import React from "react";
import { Link } from "react-router-dom";

import img from "../../assets/img/not-found.png";

import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <>
      <div className={styles.body}>
        <img src={img} alt="background" />
        <div className={styles.right}>
          <div className={styles.button}>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 7L7.5 0.999999M14 7L1.5 7L14 7ZM1.5 7L7.5 13L1.5 7Z"
                stroke="#163f2c"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <Link to={"/"}>
              <p>BACK TO MAIN PAGE</p>
            </Link>
          </div>
          <div className={styles.content}>
            <h1>Oops... Page is not found</h1>
            <p>check if the address is correct</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
