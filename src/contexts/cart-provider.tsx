import React from 'react';
import { randomUUID } from 'expo-crypto';
import { createContext, PropsWithChildren, useContext } from 'react';
import { CartItem, Product } from '../types';

export interface CartProps {
  items: CartItem[];
  addItems: (product: Product, size: string) => void;
  updateItems: (itemId: string, quantity: -1 | 1) => void;
}
const CartContext = createContext<CartProps>({
  items: [],
  addItems: () => {},
  updateItems: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  const addItems = (product: Product, size: string) => {
    const itemExistCheck = cartItems.find(
      (item) => item.product_id === product.id && item.size === size,
    );
    if (itemExistCheck) {
      updateItems(itemExistCheck.id, 1);
    } else {
      const cartItemAdd = {
        id: randomUUID(),
        product,
        product_id: product.id,
        size,
        quantity: 1,
      };

      const newCartData = [cartItemAdd, ...cartItems];
      setCartItems(newCartData);
    }
    console.log('cartItems', cartItems);
  };

  const updateItems = (itemId: string, amount: -1 | 1) => {
    const updatedItems = cartItems
      .map((eachItem) =>
        eachItem.id === itemId
          ? {
              ...eachItem,
              quantity: eachItem.quantity + amount,
            }
          : eachItem,
      )
      .filter((item) => item.quantity > 0);
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider value={{ items: cartItems, addItems, updateItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('cart context is undefined');
  }
  return cartContext;
};

export default CartProvider;
