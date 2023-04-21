import React, { useState } from "react";
import { ScrollView } from "react-native";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'

const formularioregistro = () => {
  const [selected, setSelected] = React.useState("");
  const [fecha, setfecha] = React.useState("");
  const [hora, sethora] = React.useState("");
  const [fallecidos, setfallecidos] = React.useState("");
  const [lesionados, setlesionados] = React.useState("");
  const [sinlesion, setsinlesion] = React.useState("");

  
  const clasificacion = [
      {key:'0', value:'Seleccione una opcion'},
      {key:'1', value:'Fatal (Incluye personas fallecidas)'},
      {key:'2', value:'No fatal (Personas lesionadas sin ningun fallecido)'},
      {key:'3', value:'Solo daños (No hay personas lesionadas ni fallecidas)'},
  ]

  const tipo = [
    {key:'0', value:'Seleccione una opcion'},
    {key:'1', value:'Colision con vehiculo automotor'},
    {key:'2', value:'Colision con peaton'},
    {key:'3', value:'Colision con animal'},
    {key:'4', value:'Colision con objeto fijo'},
    {key:'5', value:'Volcadura'},
    {key:'6', value:'Caida de pasajero'},
    {key:'7', value:'Salida del camino'},
    {key:'8', value:'Incendio'},
    {key:'9', value:'Colision con ferrocarril'},
    {key:'10', value:'Colision con motocicleta'},
    {key:'11', value:'Colision con ciclista'},
    {key:'12', value:'Colision multiple'},
    {key:'13', value:'Otro'},
  ]

  const superficie = [
    {key:'0', value:'Seleccione una opcion'},
    {key:'1', value:'Empedrado'},
    {key:'2', value:'Huellas de rodamiento'},
    {key:'3', value:'Adoquin'},
    {key:'4', value:'Concreto'},
    {key:'5', value:'Asfalto'},
    {key:'6', value:'Terraceria'},
  ]

  const handleSubmit= () => {
    const datos = {
          fecha: fecha,
          hora: hora,
          fallecidos: fallecidos,
          lesionados: lesionados,
          sinlesion: sinlesion
        }
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Nuevo registro</Text>

      <View style={styles.unafila}>
      <TextInput
          placeholder={'Fecha del incidente'}
          style={styles.input}
          onChangeText={(fecha) => setfecha(fecha)}
          value = {fecha}
        />
      <TextInput
          placeholder={'Hora del incidente'}
          style={styles.input}
          onChangeText={(hora) => sethora(hora)}
          value = {hora}
        />
      </View>
        <Text style={styles.subtitulo}>Clasificacion del siniestro</Text>
        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={clasificacion} 
          save="value"
        />
      <Text style={styles.subtitulo}> Ingresa: </Text>
      <TextInput
          placeholder={'Numero de personas fallecidas'}
          style={styles.personas}
          onChangeText={(fallecidos) => setfallecidos(fallecidos)}
          value = {fallecidos}
        />
        <TextInput
          placeholder={'Numero de personas lesionadas'}
          style={styles.personas}
          onChangeText={(lesionados) => setlesionados(lesionados)}
          value = {lesionados}
        /><TextInput
        placeholder={'Numero de personas involucradas sin lesiones'}
        style={styles.personas}
        onChangeText={(sinlesion) => setsinlesion(sinlesion)}
        value = {sinlesion}
      />
      <Text style={styles.subtitulo}>Tipo de siniestro</Text>
        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={tipo} 
          save="value"
        />

      <Text style={styles.subtitulo}>Superficie de rodamiento</Text>
        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={superficie} 
          save="value"
        />

      <View style={styles.unafila}>
      <Button color="black">
        {/*<LinearGradient
            colors={["#f2372e", "#430804"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          > 
          texto 
          </LinearGradient>*/}
          
            <Text style={styles.textButton}>Cancelar registro</Text>
          
        </Button>

       {/*<TouchableOpacity style={styles.lg}>
          <LinearGradient
            colors={["#2a2a2a", "#000000", "#2a2a2a"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.textButton}>Guardar registro (Terminar despues)</Text>
          </LinearGradient>
  </TouchableOpacity>*/}
        
        <Button color="black" onPress={handleSubmit}>
         {/*<LinearGradient
            colors={["#5aff00", "#4c7a45"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          > 
         texto 
          </LinearGradient>*/}
          <Text style={styles.textButton}>Continuar</Text>
        </Button>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1"
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000000",
  },
  unafila:{
    flexDirection: "row",
    marginTop: 10,
  },
  input: {
    width: '40%',
    height: 50,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    paddingStart: 20,
  },
  subtitulo: {
    fontSize: 14,
      color: "black",
      marginTop: 20,
      marginLeft: 20,
      marginBottom: 10,
      alignSelf: "flex-start",
  },
  personas: {
    width: '80%',
    height: 50,
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    paddingStart: 20,
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
    fontSize: 10,
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default formularioregistro;