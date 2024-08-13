import React, { useContext } from 'react'
import { TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import iconPNG from '../../assets/icon.png';
import CountCircle from './CountCircle/CountCircle';
import { CartContext } from '../../context/CartContext';

export default function CartBtn() {
  const { cart } = useContext(CartContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity className="mx-7 relative" onPress={() => navigation.navigate('Cart')}>
      <Image
        source={iconPNG}
        style={tw`w-6 h-6`} 
        resizeMode="contain"
        alt="logo" 
      />
      <CountCircle number={cart.length} />
    </TouchableOpacity>
  )
}