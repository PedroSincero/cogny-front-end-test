import React, { createContext, useState, useMemo, useEffect } from 'react';
import { getAllProducts } from '../services/products';

export const ProductContext = createContext(undefined);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsList = await getAllProducts();
      setProducts(productsList);
    };
    fetchProducts();
  }, []);

  const value = useMemo(() => ({ products, setProducts }), [products, setProducts]);

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}
