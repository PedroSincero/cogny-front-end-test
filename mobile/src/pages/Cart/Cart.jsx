import React, { useContext } from 'react';
import { Text, View, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { CartContext } from '../../context/CartContext';
import ProductRow from '../../components/ProductRow/ProductRow';
import { deleteOrder } from '../../services/orders';

export default function Cart() {
  const { cart, setCart, totalPrice } = useContext(CartContext);

  const handleClick = async () => {
    await deleteOrder();
    Alert.alert('Sucess', 'Pedido finalizado com sucesso!', [
      { text: 'OK', onPress: () => setCart([]) },
    ]);
  };

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
      <View className="bg-white rounded-b-lg p-2">
        <View className="mt-4 border-t items-center border-gray-200 pt-4">
          <Text className="text-gray-400 font-semibold mb-2">TOTAL</Text>
          <Text className="text-2xl font-bold">R$ {totalPrice}</Text>
        </View>
        <TouchableOpacity className="bg-[#F8375D] rounded-md py-3 mt-4" onPress={handleClick}>
          <Text className="text-white text-center font-bold">FINALIZAR PEDIDO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
