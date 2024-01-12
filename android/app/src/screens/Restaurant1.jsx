import React from "react";
import { View, FlatList } from "react-native";

export default function Restaurant1() {

    const data1 = [
        { id: "1", title: "Becki obrok", description: "Pohovana piletina, pomfrit, tartar sos", price: "100 RSD" },
        { id: "2", title: "Karadjordjeva", description: "Kackavalj, pomfrit, tartar sos, sunka", price: "200 RSD" },
        { id: "3", title: "Tonno pizza", description: "Pelat, masline, pecurke, tunjevina, posni sir*", price: "300 RSD" },
        { id: "4", title: "Italijanska salata", description: "Paradajz, origano, majonez, sunka, pecurke...", price: "100 RSD" },
        { id: "5", title: "Bolognese spagete", description: "Bolonjeze sos, masline, parmezan", price: "1000 RSD" },
        { id: "6", title: "Sumadijski sendvic", description: "Jaje, pavlaka, suvi vrat", price: "140 RSD" },
        { id: "7", title: "Tortilja pizza", description: "Sunka, pelat, pecurke, kackavalj, origano", price: "220 RSD" },
        { id: "8", title: "Grilovane pecurke", description: "Pecurke, pirinac", price: "100 RSD" },
        { id: "9", title: "Cevapi", description: "10 cevapa, kajmak, luk", price: "700 RSD" },
        { id: "10", title: "Pesto di pollo", description: "Gril piletina, pesto sos, neutralna pavlaka...", price: "750 RSD" },
    ];

    return (
        <View>
            <FlatList
                data={data1}
                style={{ marginTop: "10%", marginBottom: "50%" }}
                renderItem={renderMenuItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );


}