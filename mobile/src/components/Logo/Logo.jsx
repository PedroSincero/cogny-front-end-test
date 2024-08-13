import React from 'react'
import { Text,TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import LogoPNG from '../../assets/logo.png';

export default function Logo() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className="flex-row" onPress={() => navigation.navigate('Home')}>
      <Text className="text-white font-extrabold text-xl px-6">COGNYSHOES</Text>
      <Image 
        source={LogoPNG}
        style={tw`w-8 h-6`} 
        resizeMode="contain"
        alt="logo" 
      />
    </TouchableOpacity>
  )
}
