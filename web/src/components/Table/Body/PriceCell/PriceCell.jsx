import React from 'react';

const calculateTotal = (price, quantity) => (price * quantity).toFixed(2);
export default function PriceCell({ price, quantity }) {
  return <td className="text-right font-semibold">R${calculateTotal(price, quantity)}</td>;
}
