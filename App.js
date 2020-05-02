/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './components/screens/HomeScreen';
import FishScreen from './components/screens/FishScreen';
import BugsScreen from './components/screens/BugsScreen';

import {styles} from './components/style';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome to the NookApp',
            headerStyle: {
              backgroundColor: styles.purple.color,
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Fish"
          component={FishScreen}
          options={{
            title: 'Fish',
            headerStyle: {
              backgroundColor: styles.blue.color,
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Bugs"
          component={BugsScreen}
          options={{
            title: 'Bugs',
            headerStyle: {
              backgroundColor: styles.green.color,
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
