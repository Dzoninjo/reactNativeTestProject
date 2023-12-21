import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='ScreenB'
      screenOptions={({route}) => ({
        tabBarIcon : ({focused, size, color}) => {
          let iconName;
          if(route.name === "ScreenA"){
            iconName = 'autoprefixer';
            size = focused ? 25 : 20;
            color = focused ? "#2252df" : "#333"
          }
          else if (route.name === 'ScreenB')
          {
            iconName = 'btc';
          size = focused ? 25 : 20;
          color = focused ? "#2252df" : "#333"}
          return (
            <FontAwesome5 
            name = {iconName}
            size = {size}
            color = {color}
            />
          )
        }
      })}>
        <Tab.Screen name="ScreenA" component={ScreenA} />
        <Tab.Screen name="ScreenB" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
