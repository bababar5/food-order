import styles from "./CartItem.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const CartItem = (props) => {
  const cartContext = useContext(CartContext);
  
  const onDeacreaseClick = () => {
    cartContext.decreaseAmount(props.id);
  }
  
  const onIncreaseClick = () => {
    cartContext.increaseAmount(props.id);
  }

    return (
    <div className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>${props.price}</span>
          <span className={styles.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onDeacreaseClick}>-</button>
        <button onClick={onIncreaseClick}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
