import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerScreenStack } from "./DrawerStack";
import { Button,  } from "react-native-paper";

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
      <HomeStack.Screen name="Meni" component={RestaurantDetailsScreen} options={{headerShown:false}} />
    </HomeStack.Navigator>
  );
}

function openDishAlert(id){
  let quantity = 1;
  return(
    
    Alert.alert(
      `Unesite količinu za ${id}`,
      null,
      [
        {
          text: "Odustani",
          style: "cancel",
        },
        {
          text: "Potvrdi",
          onPress: () => {
         
          },
        },
      ],
      "plain-text",
      quantity
    )
  )
}

function renderRestaurantMenu(id) {
  const renderMenuItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => openDishAlert(item.id)}
      >
        <View style ={styles.itemContent}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </TouchableOpacity>
    );
  };
  
  const data1 = [
    { id: "1", title: "Becki obrok", description:"Pohovana piletina, pomfrit, tartar sos", price: "100 RSD" },
    { id: "2", title: "Karadjordjeva", description:"Kackavalj, pomfrit, tartar sos, sunka", price: "200 RSD" },
    { id: "3", title: "Tonno pizza", description:"Pelat, masline, pecurke, tunjevina, posni sir*", price: "300 RSD" },
    { id: "4", title: "Italijanska salata", description:"Paradajz, origano, majonez, sunka, pecurke...", price: "100 RSD"},
    { id: "5", title: "Bolognese spagete", description:"Bolonjeze sos, masline, parmezan", price: "1000 RSD"},
    { id: "6", title: "Sumadijski sendvic", description:"Jaje, pavlaka, suvi vrat", price: "140 RSD" },
    { id: "7", title: "Tortilja pizza", description:"Sunka, pelat, pecurke, kackavalj, origano", price: "220 RSD" },
    { id: "8", title: "Grilovane pecurke", description:"Pecurke, pirinac", price: "100 RSD" },
    { id: "9", title: "Cevapi", description:"10 cevapa, kajmak, luk", price: "700 RSD"},
    { id: "10", title: "Pesto di pollo", description:"Gril piletina, pesto sos, neutralna pavlaka...", price: "750 RSD"},
  ];

  const data2 = [
    { id: "1", title: "Girice", description:"100g, somun", price: "100 RSD" },
    { id: "2", title: "Musaka", description:"Krompir, junetina, kiselo mleko", price: "200 RSD" },
    { id: "3", title: "Przenice", description:"Feta sir, paradajz", price: "300 RSD" },
    { id: "4", title: "Pita sir", description:"Pita, jogurt", price: "100 RSD"},
    { id: "5", title: "Punjena paprika", description:"Junetina,", price: "1000 RSD"},
    { id: "6", title: "Baklava", description:"Orasi, suvo grozdje, kore", price: "140 RSD" },
  ];

  const data3 = [
    { id: "1", title: "Lazanje", description:"Testenina, bolonjeze sos, parmezan", price: "100 RSD" },
    { id: "2", title: "Kapricoza", description:"Sunka, pelat, kackavalj, sampinjoni", price: "200 RSD" },
    { id: "3", title: "Burger", description:"Junetina, krastavcici, burger sos, zelena salata", price: "300 RSD" },
    { id: "4", title: "Omlet", description:"Omlet od 3 jaja, slanina", price: "100 RSD"},
    { id: "5", title: "Teleca corba", description:"Teletina, luk, kisela pavlaka", price: "1000 RSD"},
    { id: "6", title: "Palacinka", description:"Nutela, plazma", price: "140 RSD" },
  ];

  const data4 = [
    { id: "1", title: "Cezar salata", description:"Piletina, ajsberg, krutoni, sos", price: "100 RSD" },
    { id: "2", title: "Mexicana", description:"Pelat, kackavalj, ljuta paprika, kulen", price: "200 RSD" },
    { id: "3", title: "Uzicka lepinja", description:"Somun, kajmak, jaje, pretop", price: "300 RSD" },
    { id: "4", title: "Susam pljeskavica", description:"Rostilj meso, susam, prilozi", price: "100 RSD"},
    { id: "5", title: "Pasulj sa kobasicom", description:"Pasulj, kobasica, salata po izboru", price: "1000 RSD"},
    { id: "6", title: "Tortilja", description:"Piletina, pomfrit, salata po izboru", price: "140 RSD" },
  ];

  const data5 = [
    { id: "1", title: "Cezar salata", description:"Piletina, ajsberg, krutoni, sos", price: "100 RSD" },
    { id: "2", title: "Mexicana", description:"Pelat, kackavalj, ljuta paprika, kulen", price: "200 RSD" },
    { id: "3", title: "Uzicka lepinja", description:"Somun, kajmak, jaje, pretop", price: "300 RSD" },
    { id: "4", title: "Susam pljeskavica", description:"Rostilj meso, susam, prilozi", price: "100 RSD"},
    { id: "5", title: "Pasulj sa kobasicom", description:"Pasulj, kobasica, salata po izboru", price: "1000 RSD"},
    { id: "6", title: "Tortilja", description:"Piletina, pomfrit, salata po izboru", price: "140 RSD" },
    { id: "7", title: "Lenja pita", description:"Jabuke, cimet, slag", price: "140 RSD" },
    { id: "8", title: "Pita sa makom", description:"Mak, posno*", price: "140 RSD" },
    ];
  switch (id) {
    case "1":
      return (
        <View>
          <FlatList
            data={data1}
            style={{ marginTop: "10%",marginBottom:"50%" }}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      );
    case "2":
      return (
        <View>
          <FlatList
            data={data2}
            style={{ marginTop: "10%",marginBottom:"50%" }}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      );
    case "3":
      return (
        <View>
          <FlatList
            data={data3}
            style={{ marginTop: "10%",marginBottom:"50%" }}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      );
    case "4":
      return (
        <View>
          <FlatList
            data={data4}
            style={{ marginTop: "10%",marginBottom:"50%" }}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      );
    case "5":
      return (
        <View>
          <FlatList
            data={data5}
            style={{ marginTop: "10%",marginBottom:"50%" }}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      );
    default:
  }
}

function RestaurantDetailsScreen({ route }) {
  const { restaurantId } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>Restoran {restaurantId}</Text>      
      {renderRestaurantMenu(restaurantId)}
      <View style={styles.buttonsContainer}>
        <Button
          mode="contained"
          style={[styles.button, { backgroundColor: "white" }]}
          labelStyle={{ color: "red", fontSize: 16 }}
          onPress={()=>navigation.navigate("Restorani")}>
          Odustani</Button>
        <Button
          mode="contained"
          style={[
            styles.button,
            { backgroundColor: "#0080ff", borderColor: "black" },
          ]}
          labelStyle={{ color: "white", fontSize: 16 }}>
          Nastavi</Button>
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
    fontSize: 24,
    textAlign: "center",
    marginTop:"5%"
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
  itemContent:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
});

export default DetailScreen;
