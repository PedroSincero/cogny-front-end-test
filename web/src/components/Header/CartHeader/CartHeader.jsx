import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../../../services/orders';

export default function CartHeader() {
  const [countItem, setCountItem] = useState(0);
  useEffect(() => {
    const fetchOrders = async () => {
      const result = await getAllOrders();
      const count = result[0].products.length;
      setCountItem(count);
    };
    fetchOrders();
  }, []);
  return (
    <div>
      <p className="text-white font-bold text-sm">Meu carrinho</p>
      <p className="text-end text-xs text-[#a3a3a6]">
        <span>{countItem}</span> itens
      </p>
    </div>
  );
}
