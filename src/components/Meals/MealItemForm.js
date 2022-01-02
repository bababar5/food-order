import { useContext } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const cartContext = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    cartContext.addItem({...props.item, amount: Number(event.target[0].value)});
  }

  return (
    <div>
      <form onSubmit={(event) => submitHandler(event)} className={styles.form}>
        <div>
         <label htmlFor={`amount_${props.item.id}`} >Amount</label>
          <input min={1} defaultValue={1} name={`amount_${props.item.id}`} id={`amount_${props.item.id}`} type={"number"}></input>
        </div>
        <button>+Add</button>
      </form>
    </div>
  );
};

export default MealItemForm;
