import React from "react";
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { createDrawerNavigator, DrawerContentScrollView,
DrawerItemList, } from "@react-navigation/drawer";

function MyModal({ isVisible, onClick }) {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      presentationStyle="overFullScreen"
      transparent={false}
    >
      <SafeAreaView style={styles["modal-container"]}>
        <Text style={{ paddingTop: 20, fontSize: 22 }}>IN MODAL</Text>
        <Button onPress={onClick} title="CLOSE"></Button>
      </SafeAreaView>
    </Modal>
  );
}

function HomeScreen({ navigation }) {
  const [showModal, setShowModal] = React.useState(false);

 

  return (
    <View style={styles.container}>
      {/* MODAL */}
      <MyModal isVisible={showModal} onClick={() => setShowModal(false)} />
      {/* PAGE CONTENT */}
      <Text style={{textAlign:"center"}}>Dobrodošli u aplikaciju za kućnu dostavu!
         Izaberite uslugu koju želite da pokrenete klikom na dugme ispod

      </Text>
      <StatusBar style="auto" />
      <Button
        title="next page"
        onPress={() => navigation.navigate("Restorani")}
      ></Button>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the ProfileScreen page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function HelpScreen() {
    return (
      <View style={styles.container}>
        <Text>This is the HelpScreen page</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

function CustomDrawerContent(props,{navigation}){
    return(
        <>
        <DrawerContentScrollView {...props}>
        <View style ={styles.drawerHeader}><Text>Header</Text></View>
            <View style = {{flex:1}}>
                <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        <View style = {{marginBottom:5}}>
            <Button title="logout"
            onPress={()=>{
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
    <DrawerStack.Navigator initialRouteName="Home"
    drawerContent={(props)=><CustomDrawerContent {...props}/>}>
      <DrawerStack.Screen name="Home" component={HomeScreen} />
      <DrawerStack.Screen name="Profile" component={ProfileScreen} />
      <DrawerStack.Screen name="Help" component={HelpScreen} />
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
  drawerHeader:{
    height:100,
    backgroundColor:"#f1f1f1",
    margin:10,
    marginTop:10,
    marginBottom:8,
    borderRadius:8,
  }
});
