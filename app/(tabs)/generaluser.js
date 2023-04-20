import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const generaluser = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido</Text>
      <Text style={styles.subtitulo}>Que desea hacer?</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.lg}>
          <LinearGradient
            colors={["#2a2a2a", "#000000", "#2a2a2a"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Link href="formularioregistro" style={styles.textButton}>Nuevo registro</Link>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lg}>
          <LinearGradient
            colors={["#2a2a2a", "#000000", "#2a2a2a"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.textButton}>Ver registros</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //funcion como tipo css
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
  },
  titulo: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitulo: {
    fontSize: 30,
    marginTop: 20,
    color: "#34434d",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "bold",
  },
  lg: {
    alignItems: "center",
    width: 200,
    marginTop: 60,
  },
});

export default generaluser;