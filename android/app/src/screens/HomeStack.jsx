import React from "react";
import {
  StyleSheet,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerScreenStack } from "./DrawerStack";
import DetailScreen from "./DetailScreen";
import RestaurantDetailsScreen from "./RestaurantDetailsScreen";
import CartScreen from "./CartScreen";



const HomeStack = createNativeStackNavigator();
export function HomeScreenStack() {

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="DrawerHome"
        component={DrawerScreenStack}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Restorani" component={DetailScreen} />
      <HomeStack.Screen name="Meni" component={RestaurantDetailsScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Cart" component={CartScreen} />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: "5%"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  itemPrice: {
    fontSize: 24,
    color: "#888",
    textAlign: "center",
  },
  itemDescription: {
    fontSize: 18,
    color: "#88888880",
    textAlign: "left",
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "5%",
    paddingBottom: "5%",
    backgroundColor: "#f1f1f1",
  },
});

