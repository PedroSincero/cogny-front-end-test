import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export default function CartHeader() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <p className="text-white font-bold text-sm">Meu carrinho</p>
      <p className="text-end text-xs text-[#a3a3a6]">
        <span>{cart.length}</span> itens
      </p>
    </div>
  );
}
