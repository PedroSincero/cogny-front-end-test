import React from 'react';
import ProductCell from './ProductCell/ProductCell';
import QuantityCell from './QuantityCell/QuantityCell';
import PriceCell from './PriceCell/PriceCell';

export default function Body({ products }) {
  return (
    <tbody>
      {products.map((product) => (
        <tr key={product.id} className="border-b">
          <ProductCell
            imageUrl={product.imageUrl}
            description={product.description}
            price={product.price}
          />
          <QuantityCell quantity={product.quantity} />
          <PriceCell price={product.price} quantity={product.quantity} />
        </tr>
      ))}
    </tbody>
  );
}
