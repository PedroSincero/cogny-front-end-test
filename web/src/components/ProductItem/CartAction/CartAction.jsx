/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { addProductToOrder, getAllOrders, updateProductInOrder } from '../../../services/orders';

export default function CartAction({ description, imageUrl, price, id }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e) => {
    const { value } = e.target;
    const result = Number(value);
    setQuantity(result);
  };

  const handleAddToCart = async () => {
    const fetchOrders = await getAllOrders();
    const order = fetchOrders[0].products;
    const exist = order.some((product) => product.id === id);
    if (exist) {
      const result = await updateProductInOrder(id, { quantity });
      localStorage.setItem('orders', JSON.stringify(result));
    } else {
      const newProduct = {
        id,
        description,
        imageUrl,
        price,
        quantity,
        timestamp: new Date(),
      };
      const getLocal = JSON.parse(localStorage.getItem('orders')) || [];
      const result = [...getLocal, newProduct]
      await addProductToOrder(newProduct);
      localStorage.setItem('orders', JSON.stringify(result));
    }
  };

  return (
    <div className="flex items-center font-bold text-white text-sm">
      <input
        type="number"
        value={Number(quantity).toString()}
        className="flex text-center rounded-l-lg h-full w-1/3 bg-[#c62c4a] text-cente p-3.5 no-arrows"
        disabled
        onChange={handleQuantity}
      />
      <button
        type="button"
        className="w-full rounded-r-lg bg-[#F8375D] p-3.5 hover:bg-[#c62c4a]"
        onClick={handleAddToCart}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
