import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/products';
import ProductItem from '../../components/ProductItem/ProductItem';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productsList = await getAllProducts();
      setProducts(productsList);
    };
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5 bg-[#191920]">
      {products.map((product) => (
        <ProductItem
          key={`${product.id} ${product.description}`}
          id={product.id}
          description={product.description}
          imageUrl={product.imageUrl}
          price={product.price}
        />
      ))}
    </div>
  );
}
