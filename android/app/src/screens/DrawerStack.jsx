import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import ProfileScreen from "./ProfileScreen";
import HelpScreen from "./HelpScreen";


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dobrodošli u aplikaciju za kućnu dostavu!
        Klikom na dugme ispod prelazite na listu trenutno dostupnih restorana

      </Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => navigation.navigate("Restorani")}>
        <Text style={styles.button}>Lista restorana</Text>
      </TouchableOpacity>
    </View>
  );
}

function CustomDrawerContent(props, { navigation }) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}><Text>Header</Text></View>
        <View style={{ flex: 1 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ marginBottom: 5 }}>
        <Button title="logout"
          onPress={() => {
            props.navigation.closeDrawer();
            navigation.navigate("Login");
          }}>Logout</Button>
      </View>
    </>
  )
}

const DrawerStack = createDrawerNavigator();
export function DrawerScreenStack() {
  return (
    <DrawerStack.Navigator initialRouteName="Pocetna"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <DrawerStack.Screen name="Pocetna" component={HomeScreen} />
      <DrawerStack.Screen name="Profil" component={ProfileScreen} />
      <DrawerStack.Screen name="Pomoc" component={HelpScreen} />
    </DrawerStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  "modal-container": {
    flex: 1,
    alignItems: "center",
    borderRadius: 18,
  },
  drawerHeader: {
    height: 100,
    backgroundColor: "#f1f1f1",
    margin: 10,
    marginTop: 10,
    marginBottom: 8,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#0080ff",
    color: "#fff",
    width: 150,
    height: 50,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: '10%'

  }
});
