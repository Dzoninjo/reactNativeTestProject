import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreenStack } from './android/app/src/screens/HomeStack';

function App() {
  return (
    <NavigationContainer>
      <HomeScreenStack />
    </NavigationContainer>
  );
}

export default App;

