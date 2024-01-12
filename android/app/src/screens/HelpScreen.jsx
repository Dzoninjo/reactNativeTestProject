import { View, Text, StatusBar, StyleSheet } from "react-native";

export default function HelpScreen() {
    return (
        <View style={styles.container}>
            <Text>This is the HelpScreen page</Text>
            <StatusBar style="auto" />
        </View>
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