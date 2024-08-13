import React, { createContext, useState, useMemo, useEffect } from 'react';
import { getAllOrders } from '../services/orders';

export const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getAllOrders();
      const result = orders[0].products;
      setCart(result);
    };
    fetchOrders();
  }, []);

  const value = useMemo(() => ({ cart, setCart }), [cart, setCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
