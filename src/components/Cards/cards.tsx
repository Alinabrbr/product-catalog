import styles from './cards.module.css'
import {TProduct, useAppDispatch, useAppSelector} from "../../utils/types/types";
import {Card} from "../Card/card";
import {productsArray} from "../../services/actions/actionsSelector";
import {addProduct} from "../../services/reducers/cartSlice";

export const Cards = () => {

  const products: TProduct[] = useAppSelector(productsArray);
  const dispatch = useAppDispatch();

  const AddToCart = (product: TProduct): void => {
    dispatch(addProduct(product));
  }

  return (
    <section className={styles.cards}>
      <ul className={styles.cards__list}>
        {products?.map((product: TProduct) => (<Card key={product.id} product={product} buttonAdd={() => AddToCart(product)}/>))}
      </ul>
    </section>
  );
}