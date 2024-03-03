// name of the file is UserProvider
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addCartItem(item) {
    const found = cartItems.find((element) => element.id === item.id);

    if (found === undefined) {
      setCartItems((pros) => [...pros, item]);
    }
  }

  function getCartItems() {
    return cartItems;
  }

  function deleteCartItem(id) {
    setCartItems(
      cartItems.filter((item) => {
        return item.id === id;
      }),
    );
  }

  return (
    <CartContext.Provider
      value={{
        addCartItem,
        getCartItems,
        deleteCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext is used outside of CartProvider ");
  //to avoid using teh context outside of where it should be used
  return context;
}

export { CartProvider, useCart };
