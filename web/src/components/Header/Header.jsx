import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../assets/Logo';

export default function Header() {
  return (
    <div className="flex flex-col h-full px-60 items-center bg-[#191920]">
      <div className="flex w-full justify-between py-12">
        <div className="flex gap-3 text-white">
          <p className=" text-4xl font-extrabold">COGNYSHOES</p>
          <Logo />
        </div>
        <div>
          <p className="text-white font-bold text-sm">Meu carrinho</p>
          <p className='text-end text-xs text-[#a3a3a6]'>
            <span>3</span> itens
          </p>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
