import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

export default function CartHeader() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const cartNumber = cart.reduce((acc, curr) => {
    const total = acc + curr.quantity;
    return total;
  }, 0);

  return (
    <button type="button" onClick={() => navigate('/cart')}>
      <p className="text-white font-bold text-sm">Meu carrinho</p>
      <p className="text-end text-xs text-[#a3a3a6]">
        <span>{cartNumber}</span> itens
      </p>
    </button>
  );
}
