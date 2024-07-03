import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CartScreen from './CartScreen';
import HomeScreen from './HomeScreen';



const Drawer = createDrawerNavigator(); 

export default function DrawerNavigator() {
  return (
    
    <Drawer.Navigator >
      
<Drawer.Screen name="HomeScreen" component={HomeScreen} />
<Drawer.Screen name="CartScreen" component={CartScreen} />

    </Drawer.Navigator>
  
);
}