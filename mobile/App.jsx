import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home/Home';
import Cart from './src/pages/Cart/Cart';
import { CartProvider } from './src/context/CartContext';
import Logo from './src/components/Logo/Logo';
import CartBtn from './src/components/CartBtn/CartBtn';
import { ProductProvider } from './src/context/ProductContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ProductProvider>
        <CartProvider>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={() => ({
              headerStyle: {
                backgroundColor: '#191920',
                borderBottomWidth: 0,
              },
              headerShadowVisible: false,
              headerRight: () => <CartBtn />,
              headerLeft: () => <Logo />,
            })}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </CartProvider>
      </ProductProvider>
    </NavigationContainer>
  );
}
