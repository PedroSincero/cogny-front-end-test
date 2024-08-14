import React, { useContext, useState } from 'react';
import { addProductInOrder } from '../../../services/orders';
import { CartContext } from '../../../context/CartContext';

export default function CartAction({ description, imageUrl, price, id }) {
  const [quantity, setQuantity] = useState(1);
  const { setCart } = useContext(CartContext);

  const handleQuantity = (e) => {
    const { value } = e.target;
    const result = Number(value);
    setQuantity(result);
  };

  const handleAddToCart = async () => {
    const cart = await addProductInOrder(id, { quantity, description, imageUrl, price, id });
    setCart(cart);
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
