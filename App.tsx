import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName='ScreenA'
      screenOptions={{
        drawerPosition:"left",
        drawerType:"slide",
        swipeEdgeWidth:500,
        drawerHideStatusBarOnOpen:true,
        overlayColor:"#00000095",
        headerShown:true,
        headerTitleAlign:"center",
        headerStyle:{
          backgroundColor:"#0080ff"
        },
        headerTintColor:"#ffffff",
        headerTitleStyle:{
          fontSize:25,
          fontWeight:"bold",
        },
        swipeEnabled:true,
      }}
    >
        <Drawer.Screen name="ScreenA"
         component={ScreenA}
         options={{
          title:"Screen A Title",
          drawerIcon: ({focused}) => (
            <FontAwesome5
            name = "autoprefixer"
            size = {focused ? 25 : 20}
            color={focused ? "#0080ff" : '#999999'}
            />
          )
         }}
        />
        <Drawer.Screen name="ScreenB"
         component={ScreenB}
        options={{
          title:"Screen B Title",
          drawerIcon: ({focused}) => (
            <FontAwesome5
            name = "btc"
            size = {focused ? 25 : 20}
            color={focused ? "#0080ff" : '#999999'}
            />
          )
         }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
