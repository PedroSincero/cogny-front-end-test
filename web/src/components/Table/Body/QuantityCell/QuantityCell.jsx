import React, { useContext, useState } from 'react';
import { deleteProductById, updateProductById } from '../../../../services/orders';
import { CartContext } from '../../../../context/CartContext';

export default function QuantityCell({ id, quantity }) {
  const { setCart } = useContext(CartContext);
  const [valueQuantity, setValuQuantity] = useState(quantity);
  const handleChange = async (e) => {
    const { value } = e.target;
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
    <td className="text-center">
      <input
        type="number"
        value={valueQuantity}
        onChange={handleChange}
        className="w-16 text-center border rounded p-1"
      />
    </td>
  );
}
