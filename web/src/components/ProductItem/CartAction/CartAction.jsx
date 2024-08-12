import React from 'react';

export default function CartAction() {
  return (
    <div className="flex items-center font-bold text-white text-sm">
    <input
      type="number"
      min="1"
      value="1"
      className="flex text-center rounded-l-lg h-full w-1/3 bg-[#c62c4a] text-cente p-3.5 no-arrows"
      onChange={() => {}}
    />
    <button type="button" className="w-full rounded-r-lg bg-[#F8375D] p-3.5 hover:bg-[#c62c4a]">
      Adicionar ao Carrinho
    </button>
  </div>
  )
}
