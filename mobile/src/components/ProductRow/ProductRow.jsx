import React from 'react';
import { View, Text, Image } from 'react-native';
import QuantityCell from './QuantityCell/QuantityCell';

function ProductRow({ product }) {
  return (
    <View className="mb-4 p-2">
      <View className="flex-row mb-2">
        <Image source={{ uri: product.imageUrl }} className="w-20 h-20 mr-4" resizeMode="cover" />
        <View className="flex-1 justify-center">
          <Text className="text-sm">{product.description}</Text>
          <Text className="font-bold text-base mt-1">R${product.price.toFixed(2)}</Text>
        </View>
      </View>
      <View className="flex-row justify-between items-center bg-[#EEEEEE] rounded-md py-2 px-7">
        <QuantityCell id={product.id} quantity={product.quantity} />
        <Text className="font-bold text-base">
          R${(product.price * product.quantity).toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

export default ProductRow;
