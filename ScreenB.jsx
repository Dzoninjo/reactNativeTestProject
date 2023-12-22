import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function ScreenB({navigation, route}) {
  
  const { ItemName, ItemId } = route.params;
  
  const onPressHandler = () => {
      navigation.goBack();
    }
    return (
      <View style={styles.body}>
        <Text style = {styles.text}>Screen B</Text>
        <Pressable
        onPress={onPressHandler}
        style = {({pressed}) => ({backgroundColor :pressed ? "#ddd" : "#ccc"})}>
          <Text style = {styles.text}>
            Go back to Screen A
          </Text>
        </Pressable>
        <Text style = {styles.text}>{ItemName}</Text>
        <Text style = {styles.text}>ID: {ItemId}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
      fontSize : 40,
      fontWeight : 'bold',
      margin : 10,
    }
  });
  