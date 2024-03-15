import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DishItemScreen from "./DishItemScreen";
import RenderRestaurantMenu from "./RenderRestaurantMenu";

function RestaurantDetailsScreen({ route }) {
    const { restaurantId } = route.params;
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    // const [currentMenuItemId, setCurrentMenuItemId] = useState(null);
    const [dishName, setDishName] = useState();
    const [dishPrice, setDishPrice] = useState(0);

    const handleCloseModal = () => {
        setModalVisible(false)
    }

    const openDishAlert = (item) => {
        const { id, title, price } = item;
        setModalVisible(true);
        // setCurrentMenuItemId(id);
        setDishName(title);
        setDishPrice(price);
    };



    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.itemText}>Restoran {restaurantId}</Text>
                    <TouchableOpacity style={styles.itemText} onPress={() => navigation.navigate("Korpa")}>
                        <FontAwesome5 name="shopping-cart" size={26} />
                    </TouchableOpacity>
                </View>
                {RenderRestaurantMenu(restaurantId, openDishAlert)}
                <View style={styles.buttonsContainer}>
                    <Button
                        mode="contained"
                        style={styles.buttonClose}
                        labelStyle={styles.label}
                        onPress={() => navigation.navigate("Restorani")}>
                        Odustani
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.buttonContinue}
                        labelStyle={{ color: "white", fontSize: 16 }}
                        onPress={() => navigation.navigate("Korpa")}>
                        Nastavi
                    </Button>
                </View>
            </View>

            <DishItemScreen
                modalOpen={isModalVisible}
                closeModal={handleCloseModal}
                // currentId={currentMenuItemId}
                dishName={dishName}
                dishPrice={dishPrice}
            />
        </>

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
    buttonClose: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "#ffffff"
    },
    buttonContinue: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "#0080ff",
        borderColor: "#0080ff"
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
    label: {
        color: "#ff0000",
        fontSize: 16
    }
});

export default RestaurantDetailsScreen;