import React from 'react';
import Table from './Table/Table';

export default function Cart() {
  const products = [
    { id: 1, name: 'Tênis de Caminhada Leve Confortável', price: 179.9, quantity: 3 },
    { id: 2, name: 'Tênis de Caminhada Leve Confortável', price: 179.9, quantity: 1 },
    { id: 3, name: 'Tênis de Caminhada Leve Confortável', price: 179.9, quantity: 1 },
  ];

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <Table products={products} />
      <div className="mt-6 text-right">
        <button
          type="button"
          className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition-colors"
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}
