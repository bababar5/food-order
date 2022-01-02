import { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./Header.module.css";

const Header = (props) => {
  const cartContext = useContext(CartContext);
  const [isButtonPop, setIsButtonPop] = useState(false);
  useEffect(() => {
    if (cartContext.items.length === 0) return;
    setIsButtonPop(true);
    const timer = setTimeout(() => {
      setIsButtonPop(false)
    }, 300)
    
    return () => clearTimeout(timer);
  }, [cartContext.items]);
  const cartButtonClasses = `${styles.button} ${isButtonPop ? styles.bump : ''}`;
  return (
    <>
      <div className={styles.header}>
        <h1>Food Order</h1>
        <button onClick={props.onShowCart} className={cartButtonClasses}>
          <div className={styles.icon}>
            <CartIcon />
          </div>
          <span>Your Cart</span>
          <span className={styles.badge}>{cartContext.totalAmount}</span>
        </button>
      </div>
      <div className={styles["main-image"]}>
        <img src="/HeaderIMG.jpg" alt="Missing"></img>
      </div>
    </>
  );
};

export default Header;
