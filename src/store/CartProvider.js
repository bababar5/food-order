import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const item = action.item;
    let updatedTotalAmount = state.totalAmount;
    const updatedItems = [...state.items]
    const identicalItem = updatedItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (identicalItem) identicalItem.amount += item.amount;
    else {
      updatedItems.push(item);
    }
    updatedTotalAmount += item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REM") {
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    let updatedTotalAmount = state.totalAmount;
    updatedTotalAmount -= 1;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "INC") {
    const updatedItems = [...state.items];
    const item = updatedItems.find((cartItem) => cartItem.id === action.id);
    let updatedTotalAmount = state.totalAmount;
    item.amount += 1;
    updatedTotalAmount += 1;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "DEC") {
    const updatedItems = [...state.items];
    const item = updatedItems.find((cartItem) => cartItem.id === action.id);
    let updatedTotalAmount = state.totalAmount;
    item.amount -= 1;
    if (item.amount === 0) {
      const removedUpdatedItems = state.items.filter(
        (item) => item.id !== action.id
      );
      updatedTotalAmount -= 1;
      return {
        items: removedUpdatedItems,
        totalAmount: updatedTotalAmount,
      };
    } else {
      updatedTotalAmount -= 1;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
    // if (amount <= 0) return;
    // let updatedTotalAmount = cartContext.totalAmount;
    // const updatedItems = cartContext.items.concat();
    // const identicalItem = updatedItems.find(
    //   (cartItem) => cartItem.name === item.name
    // );
    // if (identicalItem) identicalItem.amount += amount;
    // else {
    //   item.amount = amount;
    //   updatedItems.push(item);
    // }
    // updatedTotalAmount += amount;
    // setCartItems(updatedItems);
    // setTotalAmount(updatedTotalAmount);
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "REM", id: id });
    // let updatedTotalAmount = cartContext.totalAmount;
    // const updatedItems = cartContext.items.filter((item) => item.id !== id);
    // updatedTotalAmount -= 1;
    // setCartItems(updatedItems);
    // setTotalAmount(updatedTotalAmount);
  };

  const increaseAmountHandler = (id) => {
    dispatchCart({ type: "INC", id: id });
    // const updatedItems = cartContext.items.concat();
    // const item = updatedItems.find((cartItem) => cartItem.id === id);
    // let updatedTotalAmount = cartContext.totalAmount;
    // item.amount += 1;
    // updatedTotalAmount += 1;
    // setCartItems(updatedItems);
    // setTotalAmount(updatedTotalAmount);
  };

  const decreaseAmountHandler = (id) => {
    dispatchCart({ type: "DEC", id: id });
    // const updatedItems = cartContext.items.concat();
    // const item = updatedItems.find((cartItem) => cartItem.id === id);
    // let updatedTotalAmount = cartContext.totalAmount;
    // item.amount -= 1;
    // if (item.amount === 0) removeItemHandler(id);
    // else {
    //   updatedTotalAmount -= 1;
    //   setCartItems(updatedItems);
    //   setTotalAmount(updatedTotalAmount);
    // }
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    decreaseAmount: decreaseAmountHandler,
    increaseAmount: increaseAmountHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
