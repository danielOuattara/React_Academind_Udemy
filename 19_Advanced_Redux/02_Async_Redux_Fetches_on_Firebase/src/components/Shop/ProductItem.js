import Card from "../UI/Card";
import styles from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function ProductItem(props) {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const itemToAdd = { price, quantity: 1, id, title };

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(itemToAdd));
  };

  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}
