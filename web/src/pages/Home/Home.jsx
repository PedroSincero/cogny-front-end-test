import React from 'react';
import { getAllProducts } from '../../services/products';
import ProductItem from '../../components/ProductItem/ProductItem';

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#191920] items-center">
      <button type="button" onClick={getAllProducts} className="bg-red-500">
        Get Documents
      </button>
      <div className="grid grid-cols-3 gap-5">
        <ProductItem
          description="Tênis de Caminhada Leve 
Confortável"
          imageUrl="https://images.tcdn.com.br/img/img_prod/677922/sapato_feminino_boneca_retro_em_verniz_doll_vermelho_salto_medio_1477_1_cd4f78a74d4e1841b320ab1c8c64fac4.jpg"
          price="299"
        />
        <ProductItem
          description="teste"
          imageUrl="https://images.tcdn.com.br/img/img_prod/677922/sapato_feminino_boneca_retro_em_verniz_doll_vermelho_salto_medio_1477_1_cd4f78a74d4e1841b320ab1c8c64fac4.jpg"
          price="299"
        />
        <ProductItem
          description="teste"
          imageUrl="https://images.tcdn.com.br/img/img_prod/677922/sapato_feminino_boneca_retro_em_verniz_doll_vermelho_salto_medio_1477_1_cd4f78a74d4e1841b320ab1c8c64fac4.jpg"
          price="299"
        />
        <ProductItem
          description="teste"
          imageUrl="https://images.tcdn.com.br/img/img_prod/677922/sapato_feminino_boneca_retro_em_verniz_doll_vermelho_salto_medio_1477_1_cd4f78a74d4e1841b320ab1c8c64fac4.jpg"
          price="299"
        />
      </div>
    </div>
  );
}
