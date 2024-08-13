import React from 'react';

export default function QuantityCell({ quantity }) {
  return (
    <td className="text-center">
      <input
        type="number"
        value={quantity}
        readOnly
        className="w-16 text-center border rounded p-1"
      />
    </td>
  );
}
