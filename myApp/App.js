import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './components/Navigator.js';





export default function App() {
  return (

<NavigationContainer>
<Navigator />
</NavigationContainer>



  );
};
