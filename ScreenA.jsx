import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function ScreenA({navigation}) {
    const onPressHandler = () => {
      navigation.navigate('ScreenB', { ItemName: 'Item 1', ItemId: 15 });
    }
  
  
    return (
      <View style={styles.body}>
        <Text style = {styles.text}>Screen A</Text>
        <Pressable
        onPress={onPressHandler}
        style = {({pressed}) => ({backgroundColor :pressed ? "#ddd" : "#ccc"})}>
          <Text style = {styles.text}>
            Go to Screen B
          </Text>
        </Pressable>
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