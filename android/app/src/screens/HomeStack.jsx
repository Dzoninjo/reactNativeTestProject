import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerScreenStack } from "./DrawerStack";
import { Button } from "react-native-paper";

function DetailScreen() {
  const navigation = useNavigation();

  const data = [
    { id: "1", title: "Restoran 1" },
    { id: "2", title: "Restoran 2" },
    { id: "3", title: "Restoran 3" },
    { id: "4", title: "Restoran 4" },
    { id: "5", title: "Restoran 5" },
  ];

  const navigateToRestaurant = (id) => {
    navigation.navigate("Meni", { restaurantId: id });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigateToRestaurant(item.id)}
      >
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20%",
        }}
      >
        Izaberite restoran
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <StatusBar style="auto" />
    </View>
  );
}

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
      <HomeStack.Screen name="Meni" component={RestaurantDetailsScreen} />
    </HomeStack.Navigator>
  );
}

function renderContent(id) {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigateToRestaurant(item.id)}
      >
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const data = [
    { id: "1", title: "Jelo 1" },
    { id: "2", title: "Jelo 2" },
    { id: "3", title: "Jelo 3" },
    { id: "4", title: "Jelo 4" },
    { id: "5", title: "Jelo 5" },
    { id: "6", title: "Jelo 6" },
    { id: "7", title: "Jelo 7" },
    { id: "8", title: "Jelo 8" },
    { id: "9", title: "Jelo 9" },
    { id: "10", title: "Jelo 10" },
  ];
  switch (id) {
    case "1":
      return (
        <ScrollView>
          <FlatList
            data={data}
            style={{ marginTop: "20%" }}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
        </ScrollView>
      );
    case "2":
      return <Text style={styles.itemText}>Restoran {id} Guzic</Text>;
    case "3":
      return <Text style={styles.itemText}>Restoran {id}</Text>;
    case "4":
      return <Text style={styles.itemText}>Restoran {id} test</Text>;
    case "5":
      return <Text style={styles.itemText}>Restoran {id} proba</Text>;
    default:
  }
}

function RestaurantDetailsScreen({ route }) {
  const { restaurantId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>Restoran {restaurantId}</Text>
      {renderContent(restaurantId)}
      <View style={styles.buttonsContainer}>
        <Button
          mode="contained"
          style={[styles.button, { backgroundColor: "white" }]}
          labelStyle={{ color: "red", fontSize: 16 }}
        >
          Odustani
        </Button>
        <Button
          mode="contained"
          style={[
            styles.button,
            { backgroundColor: "#0080ff", borderColor: "black" },
          ]}
          labelStyle={{ color: "white", fontSize: 16 }}
        >
          Nastavi
        </Button>
      </View>
    </View>
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
    fontSize: 30,
    textAlign: "center",
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
});

export default DetailScreen;
