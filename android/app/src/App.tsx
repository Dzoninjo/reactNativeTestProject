import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './redux/store'; 


const Stack = createStackNavigator();

function App() {
  return (

    <Provider store={store}>
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
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
