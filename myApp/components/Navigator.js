import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from './CartScreen';
import HomeScreen from './HomeScreen';



const Stack = createStackNavigator(); 

export default function Navigator() {
  return (
    
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  
);
}