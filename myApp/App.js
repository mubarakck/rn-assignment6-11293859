import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './components/DrawerNavigator.js';





export default function App() {
  return (

<NavigationContainer>
<DrawerNavigator />
</NavigationContainer>



  );
};
