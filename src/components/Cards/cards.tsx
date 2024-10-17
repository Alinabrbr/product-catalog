import styles from './cards.module.css'
import {TProduct, useAppSelector} from "../../utils/types/types";
import {Card} from "../Card/card";
import {productsArray} from "../../services/actions/actionsSelector";

export const Cards = () => {

  const products: TProduct[] = useAppSelector(productsArray);

  const AddToCart = (product: TProduct): void => {

  }

  return (
    <section className={styles.cards}>
      <ul className={styles.cards__list}>
        {products?.map((product: TProduct) => (<Card key={product.id} product={product} buttonAdd={() => AddToCart(product)}/>))}
      </ul>
    </section>
  );
}