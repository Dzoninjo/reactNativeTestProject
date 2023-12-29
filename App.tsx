import 'react-native-gesture-handler';
import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './android/app/src/screens/Home';
import Camera from './android/app/src/screens/Camera';
import Login from './android/app/src/screens/Login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerTitleAlign:"center",
        headerStyle:{
          backgroundColor:"#0080ff"
        },
        headerTintColor:"#ffffff",
        headerTitleStyle:{
          fontSize:25,
          fontWeight:"bold",
        },
    
      }}
    >
        <Stack.Screen name="Home"
         component={Home}
         options={{
     //     headerShown:false,
         }}
        />
        <Stack.Screen name="Login"
         component={Login}
        options={{
          headerShown:false,
         }} />
         <Stack.Screen name="Camera"
         component={Camera}
        options={{
          headerShown:false,
         }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
