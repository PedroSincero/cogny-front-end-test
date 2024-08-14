import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';
import CartAction from './CartAction/CartAction';

import ProductDetails from './ProductDetails/ProductDetails';

export default function ProductItem({ description, imageUrl, price, id }) {
  return (
    <View className="flex-1 items-center my-2.5 justify-between p-3 bg-white border rounded-sm border-transparent mx-6">
      <Image 
        source={{ uri: imageUrl }}
        style={tw`w-full h-52`}
        alt={description} 
      />
      <ProductDetails price={price} description={description} />
      <CartAction description={description} imageUrl={imageUrl} price={price} id={id} />
    </View>
  );
}
