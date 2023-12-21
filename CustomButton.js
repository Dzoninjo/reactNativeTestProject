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
        android_ripple={{color : '#0000ff'}}
        style = {({pressed}) => [
            {backgroundColor : pressed ? '#ddd':'#00f0ff'},
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
        color : '#000',
        fontSize : 20,
        fontStyle : 'italic',
        margin : 10,
        textAlign : 'center'
      },
      button : {
        width : 150,
        height : 50,
        alignItems : 'center'
      },

})

export default NikolaDugme;