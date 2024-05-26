import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import MapScreen from '../components/MapScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Harita Projem' }} />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Harita' }} />
      </Stack.Navigator>
    
  );
}
    
