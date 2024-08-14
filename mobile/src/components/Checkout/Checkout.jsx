import React, { useContext } from 'react';
import { Text, View, Alert, TouchableOpacity } from 'react-native';
import { deleteOrder } from '../../services/orders';
import { CartContext } from '../../context/CartContext';

export default function Checkout() {
  const { setCart, totalPrice } = useContext(CartContext);
  const handleClick = async () => {
    await deleteOrder();
    Alert.alert('Sucess', 'Pedido finalizado com sucesso!', [
      { text: 'OK', onPress: () => setCart([]) },
    ]);
  };
  return (
    <View className="bg-white rounded-b-lg p-2">
      <View className="mt-4 border-t items-center border-gray-200 pt-4">
        <Text className="text-gray-400 font-semibold mb-2">TOTAL</Text>
        <Text className="text-2xl font-bold">R$ {totalPrice}</Text>
      </View>
      <TouchableOpacity className="bg-[#F8375D] rounded-md py-3 mt-4" onPress={handleClick}>
        <Text className="text-white text-center font-bold">FINALIZAR PEDIDO</Text>
      </TouchableOpacity>
    </View>
  );
}
