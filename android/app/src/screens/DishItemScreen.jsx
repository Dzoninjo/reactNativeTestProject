import React from "react";
import { View, Modal, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DishItemScreen({ modalOpen, closeModal, currentId, dishName, dishPrice }) {
    const handleClose = () => {
        closeModal();
    };

    return (
        <Modal
            visible={modalOpen}
            onRequestClose={handleClose}
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text>{dishName}</Text>
                    <Text>{currentId}</Text>
                    <Text>{dishPrice}</Text>
                    <TouchableOpacity title="Odustani"
                        mode="contained"
                        style={[styles.button, { backgroundColor: "#ffffff" }]}
                        onPress={handleClose}>
                        <Text style={{ color: '#ff0000' }}>Odustani</Text>
                    </TouchableOpacity>
                    <TouchableOpacity title="Dodaj u korpu"
                        mode="contained"
                        style={[
                            styles.button,
                            { backgroundColor: "#0080ff", borderColor: "#0080ff" },
                        ]}
                        onPress={handleClose}>
                        <Text style={{ color: "#ffffff" }}>Dodaj u korpu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f1f150",
    },
    modalContent: {
        backgroundColor: "#f1f1f1",
        padding: 60,
        height: "50%",
        width: "75%",
        justifyContent: "center",
        alignItems: "center",
    },
    button:
    {
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
