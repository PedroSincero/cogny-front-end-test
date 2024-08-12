import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../assets/Logo';
import CartHeader from './CartHeader/CartHeader';

export default function Header() {

  return (
    <div className="flex flex-col h-full px-60 items-center bg-[#191920]">
      <div className="flex w-full justify-between py-12">
        <div className="flex gap-3 text-white">
          <p className=" text-4xl font-extrabold">COGNYSHOES</p>
          <Logo />
        </div>
        <CartHeader />
      </div>
      <Outlet />
    </div>
  );
}
