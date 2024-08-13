/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home/Home';
import Cart from './src/pages/Cart/Cart';
import { CartProvider } from './src/context/CartContext';
import Logo from './src/components/Logo/Logo';
import CartBtn from './src/components/CartBtn/CartBtn';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#191920',
              borderBottomWidth: 0,
              paddingLeft: 20,
            },
            headerShadowVisible: false,
            headerRight: () => <CartBtn navigation={navigation} />,
            headerTitle: () => <Logo />
          })}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
}
