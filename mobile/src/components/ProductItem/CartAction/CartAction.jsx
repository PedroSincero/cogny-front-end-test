import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { addProductInOrder } from '../../../services/orders';
import { CartContext } from '../../../context/CartContext';

export default function CartAction({ description, imageUrl, price, id }) {
  const [quantity, setQuantity] = useState(1);
  const { setCart } = useContext(CartContext);

  const handleQuantity = (text) => {
    const result = Number(text);
    setQuantity(result);
  };

  const handleAddToCart = async () => {
    const cart = await addProductInOrder(id, { quantity, description, imageUrl, price, id });
    setCart(cart);
  };

  return (
    <View className="flex-row font-bold text-white text-sm">
      <TextInput
        value={quantity.toString()}
        keyboardType="numeric"
        className="flex text-center text-white rounded-l-md py-1.5 px-7 bg-[#c62c4a]"
        editable={false}
        onChangeText={handleQuantity}
      />
      <TouchableOpacity
        className="flex-1 rounded-r-md bg-[#F8375D] py-2.5 hover:bg-[#c62c4a]"
        onPress={handleAddToCart}
      >
        <Text  className="flex text-center font-semibold text-white">ADICIONAR</Text>
      </TouchableOpacity>
    </View>
  );
}
