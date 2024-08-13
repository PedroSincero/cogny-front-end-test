import React, { useContext } from 'react';
import Table from './Table/Table';
import { CartContext } from '../../context/CartContext';

export default function Cart() {
  const { cart, totalPrice } = useContext(CartContext);
  // const products = [
  //   {
  //     id: 1,
  //     imageUrl:
  //       'https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/90/NQQ-4378-890/NQQ-4378-890_zoom1.jpg?ts=1705939673?ims=1088x',
  //     description: 'Tênis de Caminhada Leve Confortável',
  //     price: 179.9,
  //     quantity: 3,
  //   },
  //   {
  //     id: 2,
  //     imageUrl:
  //       'https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/90/NQQ-4378-890/NQQ-4378-890_zoom1.jpg?ts=1705939673?ims=1088x',
  //     description: 'Tênis de Caminhada Leve Confortável',
  //     price: 179.9,
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     imageUrl:
  //       'https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/90/NQQ-4378-890/NQQ-4378-890_zoom1.jpg?ts=1705939673?ims=1088x',
  //     description: 'Tênis de Caminhada Leve Confortável',
  //     price: 179.9,
  //     quantity: 1,
  //   },
  // ];


  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-8 bg-white rounded-md">
        <h1 className="text-3xl font-bold text-[#999999] text-center">
          Seu carrinho está vazio
        </h1>
      </div>
    );
  }
  return (
    <div className='h-screen w-full'>
      <div className="container mx-auto p-8 bg-white rounded-md">
        <Table products={cart} />
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-[#F8375D] font-bold text-sm hover:bg-[#c62c4a] text-white px-5 py-2 rounded"
          >
            FINALIZAR PEDIDO
          </button>
          <p className=" text-lg font-bold text-[#999999]">
            TOTAL{' '}
            <span className="text-black font-bold text-3xl">
              R$ {totalPrice}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
