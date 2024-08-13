import Swal from 'sweetalert2';
import React, { useContext } from 'react';
import Table from '../../components/Table/Table';
import { CartContext } from '../../context/CartContext';
import { deleteOrder } from '../../services/orders';

export default function Cart() {
  const { cart, setCart, totalPrice } = useContext(CartContext);

  const handleClick = async () => {
    Swal.fire({
      title: "Seu pedido foi finalizado!",
      icon: "success",
    });
    await deleteOrder();
    setCart([]);
  };

  if (cart.length === 0) {
    return (
      <div className="h-screen w-full">
        <div className="container mx-auto p-8 bg-white rounded-md">
          <h1 className="text-3xl font-bold text-[#999999] text-center">Seu carrinho está vazio</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen w-full">
      <div className="container mx-auto p-8 bg-white rounded-md">
        <Table products={cart} />
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
      </div>
    </div>
  );
}
