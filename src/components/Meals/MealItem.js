import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const item = {...props}
  return (
      <div className={styles.meal}>
        <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{props.price}</div>
        </div>
        <MealItemForm item={item} />
      </div>
  );
};
export default MealItem;
