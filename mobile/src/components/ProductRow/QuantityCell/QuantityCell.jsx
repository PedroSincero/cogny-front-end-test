import React, { useContext, useState } from 'react';
import { TextInput } from 'react-native';
import { CartContext } from '../../../context/CartContext';
import { deleteProductById, updateProductById } from '../../../services/orders';

export default function QuantityCell({ id, quantity }) {
  const { setCart } = useContext(CartContext);
  const [valueQuantity, setValuQuantity] = useState(quantity);
  const handleChange = async (textEvent) => {
    const value = Number(textEvent);
    if (value > 0) {
      const result = await updateProductById(id, { quantity: Number(value) });
      setCart(result);
      setValuQuantity(Number(value));
    } else {
      const result = await deleteProductById(id);
      setCart(result);
    }
  };
  return (
    <TextInput
      value={valueQuantity.toString()}
      onChangeText={handleChange}
      className="bg-white rounded-md border border-gray-300 px-4 w-12 text-center"
      keyboardType="numeric"
    />
  );
}
