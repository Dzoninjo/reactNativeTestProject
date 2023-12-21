import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="ScreenA" component={ScreenA} />
        <Drawer.Screen name="ScreenB" component={ScreenB} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
