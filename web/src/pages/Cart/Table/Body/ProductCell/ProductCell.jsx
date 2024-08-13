import React from 'react';

export default function ProductCell({ description, imageUrl, price }) {
  return (
    <>
      <td className="py-4 pr-5 w-32 h-32">
        <img src={imageUrl} alt={description} className="w-full h-full object-cover mr-4" />
      </td>
      <td className="py-4">
        <div className="flex items-center">
          <div>
            <p className="font-bold text-sm text-[#333333]">{description}</p>
            <p className="font-bold text-black">R${price.toFixed(2)}</p>
          </div>
        </div>
      </td>
    </>
  );
}
