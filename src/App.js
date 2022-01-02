import { useState } from "react";
import Header from "./components/UI/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  }
  const hideCartHandler = () => {
    setIsCartShown(false);
  }
  return (
    <CartProvider>
    {isCartShown && <Cart onHideCart={hideCartHandler}/>}
    <Header onShowCart={showCartHandler} />
    <MealsSummary />
    <AvailableMeals />
    </CartProvider>
  );
}

export default App;
