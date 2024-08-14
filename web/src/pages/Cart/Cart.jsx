import React, { useContext } from 'react';
import Table from '../../components/Table/Table';
import { CartContext } from '../../context/CartContext';

export default function Cart() {
  const { cart } = useContext(CartContext);

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
      </div>
    </div>
  );
}
