import React from 'react'
import { View, Image } from 'react-native';
import tw from 'twrnc';
import iconPNG from '../../assets/icon.png';
import CountCircle from './CountCircle/CountCircle';

export default function CartBtn() {
  return (
    <View className="mx-7 relative">
      <Image
        source={iconPNG}
        style={tw`w-6 h-6`} 
        resizeMode="contain"
        alt="logo" 
      />
      <CountCircle number={1} />
    </View>
  )
}