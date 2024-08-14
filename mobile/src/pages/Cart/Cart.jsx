import React, { useContext } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { CartContext } from '../../context/CartContext';
import ProductRow from '../../components/ProductRow/ProductRow';
import Checkout from '../../components/Checkout/Checkout';

export default function Cart() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <View className="flex-1 p-5 bg-[#191920]">
        <View className="flex-1 justify-center items-center">
          <Text className="text-white text-2xl">Seu carrinho está vazio</Text>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 p-5 bg-[#191920]">
      <ScrollView className="bg-white rounded-t-lg">
        <View>
          {cart.map((product) => (
            <ProductRow key={`${product.id}`} product={product} />
          ))}
        </View>
      </ScrollView>
      <Checkout />
    </View>
  );
}
