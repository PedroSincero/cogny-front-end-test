import React, { useContext } from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import { ProductContext } from '../../context/ProductContext';

export default function Home() {
  const { products } = useContext(ProductContext);

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
