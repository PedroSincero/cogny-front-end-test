import React, { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import ProductItem from '../../components/ProductItem/ProductItem';
import { ProductContext } from '../../context/ProductContext';

export default function Home() {
  const { products } = useContext(ProductContext);
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
