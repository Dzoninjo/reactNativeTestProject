import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../utils/CustomButton';
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase({
  name:'MainDB',
  location:'default',
},
() =>{},
error => {console.log(error)}
)

export default function Home({navigation, route}) {

  const [name, setName] = useState('');
  const [age,setAge] = useState("");

  useEffect(()=>{
    createTable();
    getData();
  },[]);

  const createTable = () =>{
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS "
        +"Users "
        +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
      )
    })
  }

  const getData = () =>{
    try{
      // AsyncStorage.getItem('UserData')
      // .then(value=>{
      //   if(value !=null){
      //     let user = JSON.parse(value);
      //     setName(user.Name);
      //     setAge(user.Age);
      //   }
      // }

      // )
      db.transaction((tx)=>{
        tx.executeSql(
          "SELECT Name, Age FROM Users",
          [],
          (tx,results) =>{
            var len = results.rows.length;
            if (len > 0){
              var userName = results.rows.item(0).Name;
              var userAge = results.rows.item(0).Age;
              setName(userName);
              setAge(userAge);
            }
          }
        )
      })
    }
    catch(error){
      console.log(error);
    }
  }

  const updateData = () => {
    if (name.length === 0) {
      Alert.alert("Upozorenje", "Molimo Vas da unesete vase podatke")
    } else {
      try {
         db.transaction( (tx) => {
          tx.executeSql(
            "UPDATE Users SET Name=?",
            [name],
            () => {Alert.alert("Cestitamo", "Uspesno ste azurirali podatke")},
            error => {console.log(error)}
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  const removeData =  () => {
    try {
       db.transaction((tx) => {
        tx.executeSql("DELETE FROM Users",
        [],
        () => {navigation.navigate("Login")},
        error => {console.log(error)}
        );
      });
    } catch (error) {
      console.log(error);
    }
  }
  
    return (
      <View style={styles.body}>
        <Text style = {[
          GlobalStyle.CustomFont,
          styles.text]}>Dobrodosli {name}!</Text>
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