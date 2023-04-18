import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import icon from "../assets/caricon.png";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";

const App = () => {
  const [userName, setUserName] = useState('');
  const [pwd, setpwd] = useState('');

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.imageicon} />

      <Text style={styles.titulo}>Iniciar Sesion</Text>

      <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'Usuario'}
          style={styles.input}
        />
      
      <TextInput
          value={pwd}
          onChangeText={(pwd) => setpwd(pwd)}
          placeholder={'Contraseña'}
          style={styles.input}
        />

      <Text style={styles.forgotPassword}>Olvidaste tu contraseña?</Text>

      <TouchableOpacity style={styles.lg}>
      <LinearGradient
        colors={['#2a2a2a','#000000', '#2a2a2a']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.button}
        >
        <Link href="generaluser" style={styles.textButton}>Iniciar sesion</Link>
      </LinearGradient>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  //funcion como tipo css
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1"
  },

  imageicon: {
    marginBottom: 20,
    borderRadius: 5,
    width: 200,
    height: 100,
  },

  titulo: {
    fontSize:50,
    fontWeight: "bold",
    color: "#34434d"
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    paddingStart: 30,
  },
  forgotPassword: {
      fontSize: 14,
      color: "gray",
      marginTop: 10,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton:{
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  lg:{
    alignItems: "center",
    width:200,  
    marginTop: 60,
  } 
});

export default App;