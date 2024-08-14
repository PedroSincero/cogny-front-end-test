import React from 'react';
import { View, Text } from 'react-native';

function CountCircle({ number }) {
  return (
    <View className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-red-500 justify-center items-center">
      <Text className="text-white text-xs font-bold">
        {number}
      </Text>
    </View>
  );
}

export default CountCircle;