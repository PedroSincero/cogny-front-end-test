import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import ProductItem from '../../components/ProductItem/ProductItem';
import { getAllProducts } from '../../services/products';

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
    <View className="flex-1 items-center bg-[#191920]">
      <ScrollView>
        {products.map((product) => (
          <ProductItem
            key={`${product.id} ${product.description}`}
            description={product.description}
            imageUrl={product.imageUrl}
            price={product.price}
            id={product.id}
          />
        ))}
      </ScrollView>
    </View>
  );
}
