import 'react-native-gesture-handler';
import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Splash from './android/app/src/screens/Splash';
import Home from './android/app/src/screens/Home';
import Login from './android/app/src/screens/Login';
import { StyleSheet, View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MainStackNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName='DrawerNavigator'
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#063887"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: "bold",
        },
      }}
    >
      <RootStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Home',
          drawerLockMode: 'unlocked',
          gestureEnabled: true,
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      {/* Add other screens for the drawer menu here */}
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="MainStack"
          component={MainStackNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  // Styles
});
