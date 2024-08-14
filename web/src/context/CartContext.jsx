import React, { createContext, useState, useMemo, useEffect } from 'react';
import { getAllOrders } from '../services/orders';

export const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getAllOrders();
      const result = orders[0].products;
      setCart(result);
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    if (cart.length !== 0) {
      const total = cart
        .reduce((acc, product) => acc + product.price * product.quantity, 0)
        .toFixed(2);
      setTotalPrice(total);
    }
  }, [cart]);

  const value = useMemo(() => ({ cart, totalPrice, setCart }), [cart, totalPrice, setCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
