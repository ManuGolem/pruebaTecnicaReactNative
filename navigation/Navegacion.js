import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/loginScreen';
import ProductsScreen from '../screens/productosScreen';
import ProductDetailScreen from '../screens/detalleScreen';

const Stack = createNativeStackNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Productos" component={ProductsScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="DetallesProductos" component={ProductDetailScreen}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
