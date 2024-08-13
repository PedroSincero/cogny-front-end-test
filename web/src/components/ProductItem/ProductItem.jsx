import React from 'react';
import CartAction from './CartAction/CartAction';
import ProductDetails from './ProductDetails/ProductDetails';

export default function ProductItem({ description, imageUrl, price, id }) {
  return (
    <div className="flex flex-col justify-between p-5 bg-white border rounded-lg">
      <img className="w-full h-64 object-cover" src={imageUrl} alt={description} />
      <ProductDetails price={price} description={description} />
      <CartAction description={description} imageUrl={imageUrl} price={price} id={id} />
    </div>
  );
}
