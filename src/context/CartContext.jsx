import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

//product.thumbnail,product.title, product.price,value,product.id
// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCartList(storedCart);
    }
  }, []);

  const updateCartItemQuantity = (itemId, newQuantity) => {
    const updatedCartList = cartList.map((product) => {
      if (product.id === itemId) {
        return { ...product, value: newQuantity };
      }
      return product;
    });
    setCartList(updatedCartList);
    localStorage.setItem("cart", JSON.stringify(updatedCartList));
  };

  const removeItemFromCart = (itemId) => {
    const updatedCartList = cartList.filter((product) => product.id !== itemId);
    setCartList(updatedCartList);
    localStorage.setItem("cart", JSON.stringify(updatedCartList));
  };

  const AddItem = (thumbnail, title, price, value, id) => {
    const existingProductIndex = cartList.findIndex(
      (product) => product.id === id
    );

    if (existingProductIndex !== -1) {
      const updatedCartList = [...cartList];
      updatedCartList[existingProductIndex].value += value;
      setCartList(updatedCartList);
      localStorage.setItem("cart", JSON.stringify(updatedCartList));
    } else {
      const product = {
        image: thumbnail,
        title: title,
        price: price,
        value: value,
        id: id,
      };
      const updatedCartList = [...cartList, product];
      setCartList(updatedCartList);
      localStorage.setItem("cart", JSON.stringify(updatedCartList));
    }
  };

  return (
    <CartContext.Provider
      value={{
        AddItem,
        cartList,
        updateCartItemQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
