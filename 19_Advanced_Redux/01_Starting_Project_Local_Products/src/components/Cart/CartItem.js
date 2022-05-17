import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, subTotalPrice, price, id } = props;

  const handleUpdateQuantity = (id, value) => {
    dispatch(cartActions.updateQuantity({ id, quantity: value, price }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${subTotalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleUpdateQuantity(id, -1)}>-</button>
          <button onClick={() => handleUpdateQuantity(id, +1)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
