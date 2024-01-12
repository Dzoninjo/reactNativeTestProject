import React from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


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

export default DetailScreen