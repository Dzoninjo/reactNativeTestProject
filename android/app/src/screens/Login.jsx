import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Dimensions, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get('window').width;

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const setData = async () => {
    if (name.length === 0 || password.length === 0) {
      Alert.alert("Upozorenje", "Korisničko ime ili lozinka ne smeju da budu prazni!");
    } else if (name !== 'Nikola' || password !== 'Guzic') {
      Alert.alert("Greška", "Niste uneli ispravne korisničke podatke!");
    } else {
      try {
        await AsyncStorage.setItem("UserName", name);
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      
    >
      <View style={styles.body}>
        <Text style={styles.text}>Dobrodošli u aplikaciju za kućnu dostavu</Text>
        <View style={styles.credentials}>
          <View style={styles.labelContainer}>
            <Text style={styles.labels}>Korisničko ime</Text>
            <TextInput
              style={[styles.input, { textAlign: 'center', width: windowWidth - 40 }]}
              placeholder="Unesite Vaše korisničko ime"
              placeholderTextColor={"#06388755"}
              onChangeText={(value) => setName(value)}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.labels}>Lozinka</Text>
            <TextInput
              style={[styles.input, { textAlign: 'center', width: windowWidth - 40 }]}
              secureTextEntry={true}
              placeholder="Unesite Vašu lozinku"
              placeholderTextColor={"#06388755"}
              onChangeText={(value) => setPassword(value)}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, { width: windowWidth * 0.75 }]}
        onPress={setData}
      >
        <Text style={styles.buttonText}>Uloguj se</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#063887",
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    padding: 30,
    fontSize: 30,
    textAlign: "center",
    marginBottom : "20%"
  },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    backgroundColor: "#fff",
    color: "#063887",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  credentials: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: "20%",
  },
  labelContainer: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 20,
  },
  labels: {
    color: "#FFF",
    fontSize: 20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#fff",
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    width: windowWidth * 0.75,
    alignSelf: 'center',
  },
  buttonText: {
    color: "#063887",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic"
  },
});
