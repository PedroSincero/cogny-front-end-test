import React from 'react';

export default function ProductCell({ description, imageUrl, price }) {
  return (
    <td className="py-4">
      <div className="flex items-center">
        <img src={imageUrl} alt={description} className="w-20 h-20 object-cover mr-4" />
        <div>
          <p className="font-bold text-sm text-[#333333]">{description}</p>
          <p className="font-bold text-black">R${price.toFixed(2)}</p>
        </div>
      </div>
    </td>
  );
}
