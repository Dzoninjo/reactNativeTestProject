import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function MenuItem({ item, onPress }) {
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={onPress}
            key={item.id}
        >
            <View style={styles.itemContent}>
                <Text style={styles.itemText}>{item.title}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <Text style={styles.itemDescription}>{item.description}</Text>
        </TouchableOpacity>
    );
};

export default MenuItem;

const styles = StyleSheet.create({
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
});