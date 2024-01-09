import React, { useEffect, useState } from "react";
import { StyleSheet,
    View,
    Text,
    TextInput,
    Alert
} from "react-native";

export default function Splash({navigation}){

    useEffect(()=>{
       setTimeout(() => {
        navigation.replace("Login")
       }, 2000);
    },[])


    return (
        <View style = {styles.body}>
            <Text style = {styles.text}>Aplikacija za kućnu dostavu</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#063887',
        justifyContent : "center",
    },
    text:{
        color:'#fff',
        padding:30,
        fontSize:30,
        justifyContent : "center",
        textAlign : "center",
    },
    input:{
        width:300,
        borderWidth:1,
        borderColor:"#555",
        borderRadius:10,
        backgroundColor:"#fff",
        textAlign:'center',
        fontSize:20,
        marginTop:10,
        marginBottom:10,
    }
})