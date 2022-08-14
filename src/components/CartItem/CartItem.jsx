import React from "react";

import styles from "./CartItem.module.scss";
import img from "../../assets/img/hoops.png";

function CartItem() {
  return (
    <div className={styles.item}>
      <img src={img} alt="product" width="120px" />
      <div className={styles.item__desc}>
        <h1>Miranda Pendant</h1>
        <p>$79</p>
      </div>
      <div className={styles.item__remove}>
        <p>REMOVE</p>
      </div>
    </div>
  );
}

export default CartItem;
