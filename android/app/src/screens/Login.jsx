import React, { useEffect, useState } from "react";
import { StyleSheet,
    View,
    Text,
    TextInput,
    Alert
} from "react-native";
import CustomButton from "../utils/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({navigation}){

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(()=>{
        setData();
    },[])

    const setData = async () => {
        if(name.length == 0 || age.length == 0){
            Alert.alert("Upozorenje", "Molimo Vas da unesete vase podatke")
        }
        else{
            try{
                var user = {
                    Name:name,
                    Age:age
                }
                await AsyncStorage.setItem("UserData", JSON.stringify(user));
                navigation.navigate('Home');

            }
            catch(error){
             console.log(error);
            }
        }
    }


    return (
        <View style = {styles.body}>
            <Text style = {styles.text}> Async storage</Text>
            <TextInput style = {styles.input}
            placeholder="Unesite ime"
            onChangeText={(value) => setName(value)}></TextInput>
             <TextInput style = {styles.input}
            placeholder="Unesite godine"
            onChangeText={(value) => setAge(value)}></TextInput>
            <CustomButton 
            title = "Login"
            color = "#1eb900"
            onPressFunction = {setData}>
                
            </CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#0080ff',
    },
    text:{
        color:'#fff',
        padding:30,
        fontSize:30
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