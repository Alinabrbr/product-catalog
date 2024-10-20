import React from "react";
import styles from "./header.module.css"
import {cartCostSelector, cartCounterSelector} from "../../services/actions/actionsSelector";
import {useAppDispatch, useAppSelector} from "../../utils/types/types";
import {clearStore} from "../../services/reducers/cartSlice";

export const Header = () => {

  const cost = useAppSelector(cartCostSelector);
  const counter = useAppSelector(cartCounterSelector);
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <h1>Каталог продуктов</h1>
      <div className={styles.cart}>

        <div className={styles.info}>
          <h2>Корзина</h2>
          {<p>{counter}шт</p>}
        </div>

        {<p className={styles.cost}>{cost}&nbsp;руб</p>}

        <button className={styles.button} onClick={() => {
          alert('Заказ оформлен')
          dispatch(clearStore())
        }}>
          Оформить заказ
        </button>
      </div>
    </header>
  );
}