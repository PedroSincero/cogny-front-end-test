import React from 'react'
import { Text, View, Image } from 'react-native';
import tw from 'twrnc';
import LogoPNG from '../../assets/logo.png';

export default function Logo() {
  return (
    <View className="flex-row">
      <Text className="text-white font-extrabold text-xl px-3.5">COGNYSHOES</Text>
      <Image 
        source={LogoPNG}
        style={tw`w-8 h-6`} 
        resizeMode="contain"
        alt="logo" 
      />
    </View>
  )
}
