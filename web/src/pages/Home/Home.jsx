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
    <div className="flex flex-col h-screen w-screen bg-[#191920] items-center">
      <button type="button" onClick={getAllProducts} className="bg-red-500">
        Get Documents
      </button>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            description={product.description}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
