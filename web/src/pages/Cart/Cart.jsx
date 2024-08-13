import React from 'react';
import Table from './Table/Table';

export default function Cart() {
  const products = [
    {
      id: 1,
      imageUrl:
        'https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/90/NQQ-4378-890/NQQ-4378-890_zoom1.jpg?ts=1705939673?ims=1088x',
      description: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      quantity: 3,
    },
    {
      id: 2,
      imageUrl:
        'https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/90/NQQ-4378-890/NQQ-4378-890_zoom1.jpg?ts=1705939673?ims=1088x',
      description: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      quantity: 1,
    },
    {
      id: 3,
      imageUrl:
        'https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/90/NQQ-4378-890/NQQ-4378-890_zoom1.jpg?ts=1705939673?ims=1088x',
      description: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      quantity: 1,
    },
  ];

  return (
    <div className='h-screen w-full'>
      <div className="container mx-auto p-8 bg-white rounded-md">
        <Table products={products} />
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
              R$ {products.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
