import React from 'react';

export default function ProductDetails({ description, price }) {
  return (
    <div className="flex flex-col gap-2.5">
      <h5 className="text-gray-900 font-bold text-base">{description}</h5>
      <p className="text-base font-bold">R${price}</p>
    </div>
  );
}
