import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import MapScreen from '../components/MapScreen';
import { EventProvider } from '../context/EventContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <EventProvider>
      
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: '  ZBEU ' }} />
          <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Harita' }} />
        </Stack.Navigator>
      
    </EventProvider>
  );
}

