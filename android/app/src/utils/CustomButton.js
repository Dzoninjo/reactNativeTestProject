import React from "react";
import { Pressable,
Text,
StyleSheet,
 }
  from "react-native";

const NikolaDugme = (props) => {
    return(
        <Pressable
        onPress={props.onPressFunction}
        hitSlop={{top:10, right:10, bottom:10, left:10,}}
        android_ripple={{color : '#01ff86'}}
        style = {({pressed}) => [
            {backgroundColor : pressed ? '#1eb900':'#1eb900'},
            styles.button
        ]}>
            <Text style = {styles.text}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text :{
        color : '#fff',
        fontSize : 20,
        fontWeight:"bold",
        margin : 10,
        textAlign : 'center'
      },
      button : {
        width : 150,
        height : 50,
        alignItems : 'center',
        margin:10
      },

})

export default NikolaDugme;