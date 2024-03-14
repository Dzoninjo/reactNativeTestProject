import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RestaurantItem = ({ item }) => {
    const navigation = useNavigation();

    const navigateToRestaurant = (id) => {
        navigation.navigate("Meni", { restaurantId: id });
    };
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigateToRestaurant(item.id)}
        >
            <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
    );
}


export default RestaurantItem;