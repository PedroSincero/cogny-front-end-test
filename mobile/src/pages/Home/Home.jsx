import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { getAllProducts } from "../../services/products";


export default function Home({ navigation }) {
  return (
    <View className="flex-1 items-center bg-red-50">
      <Text className="text-blue-400">HOME</Text>
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg"
        onPress={getAllProducts}
      >
        <Text className="text-white text-center text-lg">Title</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg"
        onPress={() => navigation.navigate('Cart')}
      >
        <Text className="text-white text-center text-lg">Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
