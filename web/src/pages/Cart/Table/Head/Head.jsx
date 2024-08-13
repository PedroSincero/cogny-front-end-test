import React from 'react';

export default function Head() {
  return (
    <thead className="text-[#999999]">
      <tr>
        <th className="p-2" aria-label="Empty Header" />
        <th className="text-left p-2">PRODUTO</th>
        <th className="text-center p-2">QTD</th>
        <th className="text-right">PREÇO</th>
      </tr>
    </thead>
  );
}
