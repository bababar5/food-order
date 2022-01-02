import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalPrice = cartContext.items.reduce((sum, item) => {
        return (sum + item.price * item.amount);
      }, 0)
      .toFixed(2);
  
  const cartItems = cartContext.items.map((item) => {
    return (
      <li key={item.id}>
        <CartItem
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      </li>
    );
  });

  return (
    <Modal onHideModal={props.onHideCart}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHideCart} className={styles["button--alt"]}>
          Close
        </button>
        <button className={styles["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
