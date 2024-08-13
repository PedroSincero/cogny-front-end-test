import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo';
import CartHeader from './CartHeader/CartHeader';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full px-60 items-center bg-[#191920]">
      <div className="flex w-full justify-between py-12">
        <button type="button" className="flex gap-3 text-white" onClick={() => navigate('/')}>
          <p className=" text-4xl font-extrabold">COGNYSHOES</p>
          <Logo />
        </button>
        <CartHeader />
      </div>
      <Outlet />
    </div>
  );
}
