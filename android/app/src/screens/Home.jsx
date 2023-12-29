import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../utils/CustomButton';

export default function Home({navigation, route}) {

  const [name, setName] = useState('');
  const [age,setAge] = useState("");

  useEffect(()=>{
    getData();
  },[]);

  const getData = () =>{
    try{
      AsyncStorage.getItem('UserData')
      .then(value=>{
        if(value !=null){
          let user = JSON.parse(value);
          setName(user.Name);
          setAge(user.Age);
        }
      }

      )
    }
    catch(error){
      console.log(error);
    }
  }

  const updateData = async () => {
    if(name.length == 0){
        Alert.alert("Upozorenje", "Molimo Vas da unesete vase podatke")
    }
    else{
        try{
          var user ={
            Name:name,
          }
            await AsyncStorage.mergeItem("UserData", JSON.stringify(user));
            Alert.alert("Cestitamo", "Uspesno ste azurirali podatke");

        }
        catch(error){
         console.log(error);
        }
    }
}

const removeData = async () => {
      try{
          await AsyncStorage.removeItem("UserData");
          navigation.navigate("Login");

      }
      catch(error){
       console.log(error);
      }
}
  
    return (
      <View style={styles.body}>
          <CustomButton
        title = "Otvori kameru"
        onPressFunction = {() => {navigation.navigate('Camera')}}
        />
        <Text style = {[
          GlobalStyle.CustomFont,
          styles.text]}>Welcome {name}</Text>
        <Text style = {[
          GlobalStyle.CustomFont,
          styles.text]}>Vase godine: {age}</Text>
        <TextInput 
        style = {styles.input}
        placeholder='Unesite ime'
        value={name}
        onChangeText={(value)=>setName(value)}/>
        <CustomButton
        title = "Azuriraj ime"
        onPressFunction = {updateData}
        />
         <CustomButton
        title = "Obrisi ime"
  
        onPressFunction = {removeData}
        />

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
      // fontFamily:'Nunito-BoldItalic',
      margin : 10,
    },
    input:{
      width:300,
      borderWidth:1,
      borderColor:"#555",
      borderRadius:10,
      backgroundColor:"#fff",
      textAlign:'center',
      fontSize:20,
      marginTop:130,
      marginBottom:10,
  }
  });