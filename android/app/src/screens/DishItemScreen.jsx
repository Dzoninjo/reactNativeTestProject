import React from "react";
import {
    View,
    Modal,
    Text,
    Button
} from "react-native";

export default function DishItemScreen({ modalOpen, closeModal, currentId }) {

    const handleClose = () => {
        closeModal()
    }

    // ISTO KAO OVO GORE
    // function handleClose(){
    //     closeModal()
    // }

    return (
        <Modal visible={modalOpen} onRequestClose={handleClose}>
            <View style={{ flex: 1, backgroundColor: "#ff0001", padding: 60 }}>
                <Text>Content</Text>
                <Text>{currentId}</Text>
                <Button title='ok'
                    onPress={handleClose}>Ok</Button>
            </View>
        </Modal>
    )

}