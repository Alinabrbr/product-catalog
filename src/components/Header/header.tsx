import React from "react";
import styles from "./header.module.css"

export const Header = () => {

  return (
    <header className={styles.header}>
      <h1>Каталог продуктов</h1>
      <div className={styles.cart}>
        <div className={styles.info}>
          <h2>Корзина</h2>
          <p>2шт</p>
        </div>
        <p>420</p>
      </div>
    </header>
  );
}