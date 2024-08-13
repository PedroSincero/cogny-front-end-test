import React from 'react';

export default function ProductCell({ name, price }) {
  return (
    <td className="py-4">
      <div className="flex items-center">
        <img src="path_to_shoe_image.jpg" alt="Tênis" className="w-20 h-20 object-cover mr-4" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-600">R${price.toFixed(2)}</p>
        </div>
      </div>
    </td>
  );
}
