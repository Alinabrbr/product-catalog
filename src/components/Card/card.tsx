import styles from './card.module.css'
import {TProduct} from "../../utils/types/types";

type TCardProps = {
  product: TProduct;
  buttonAdd?: () => void;
}
export const Card = ({product, buttonAdd}:TCardProps) => {

  return (
    <li className={styles.card__item}>
      <article className="card">
        <h2 className={styles.card__title}>{product.title}</h2>
        <img className="card__image" src={product.image} alt=""/>
        <div className={styles.card__item_info}>
          <h3 className="card__price">{product.cost}</h3>
          <div className={styles.card__cart_container}>
            <button className={styles.card__cart_button} type="button" onClick={buttonAdd}>Добавить в корзину</button>
            <p className="card__cart-counter"></p>
          </div>
        </div>
      </article>
    </li>
  );
}