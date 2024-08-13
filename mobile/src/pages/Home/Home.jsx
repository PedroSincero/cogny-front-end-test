import React from 'react';
import { View, ScrollView } from 'react-native';
import ProductItem from '../../components/ProductItem/ProductItem';

export default function Home() {
  return (
    <View className="flex-1 items-center bg-[#191920]" >
      <ScrollView>
        <ProductItem
          description="Tênis de Caminhada Leve  Confortável"
          imageUrl="https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/90/NQQ-4378-890/NQQ-4378-890_zoom1.jpg?ts=1705939673?ims=1088x"
          price="2577.23"
          id="0"
        />
        <ProductItem
          description="teste bacana"
          imageUrl="https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/90/NQQ-4378-890/NQQ-4378-890_zoom1.jpg?ts=1705939673?ims=1088x"
          price="2577.23"
          id="1"
        />
      </ScrollView>
    </View>
  );
}
