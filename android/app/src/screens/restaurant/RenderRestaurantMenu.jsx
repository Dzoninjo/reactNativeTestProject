import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { restaurants } from '../../helpers/restaurantsData';
import MenuItem from './MenuItem';

function RenderRestaurantMenu(idRestaurant, openDish) {

    const [dishData, setDishData] = useState([])

    useEffect(() => {
        const data = restaurants.find(restaurant => restaurant.id === idRestaurant).data || [];
        setDishData(data)

    }, [])


    return (
        <View>
            <FlatList
                data={dishData}
                renderItem={({ item }) => <MenuItem item={item} onPress={() => openDish(item)} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer} />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 1,
        justifyContent: "center",
    }
});

export default RenderRestaurantMenu;