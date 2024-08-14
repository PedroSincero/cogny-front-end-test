import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from '../../../context/CartContext';
import { deleteOrder } from '../../../services/orders';

export default function Checkout() {
  const { setCart, totalPrice } = useContext(CartContext);

  const handleClick = async () => {
    Swal.fire({
      title: 'Seu pedido foi finalizado!',
      icon: 'success',
    });
    await deleteOrder();
    setCart([]);
  };
  return (
    <div className="flex justify-between mt-6">
      <button
        type="button"
        onClick={handleClick}
        className="bg-[#F8375D] font-bold text-sm hover:bg-[#c62c4a] text-white px-5 py-2 rounded"
      >
        FINALIZAR PEDIDO
      </button>
      <p className=" text-lg font-bold text-[#999999]">
        TOTAL <span className="text-black font-bold text-3xl">R$ {totalPrice}</span>
      </p>
    </div>
  );
}
