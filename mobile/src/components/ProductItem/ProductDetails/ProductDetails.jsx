import React from 'react';
import { View, Text } from 'react-native';

export default function ProductDetails({ description, price }) {
  return (
    <View className="flex-col gap-2.5 my-2">
      <Text className="text-gray-900 text-base">{description}</Text>
      <Text className="text-xl font-bold">R${price}</Text>
    </View>
  );
}
