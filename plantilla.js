import React, { useState } from "react";
import { TouchableOpacityBase } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import person from "./assets/icon-pearson.png";

const App = () => {
  const [selectedImage, setselectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled === true) {
      return;
    }
    setselectedImage({ localUri: pickerResult.uri });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hello world!!</Text>
      <Image
        source={{
          uri:
            selectedImage !== null
              ? selectedImage.localUri
              : "https://picsum.photos/200/200",
        }}
        style={styles.image1}
      />

      <Image source={person} style={styles.image2} />

      <Button //Boton estandar
        color="#000000"
        title="Press me"
        //onPress={() => console.log('Hello world button')} // aparece texto en consola
        onPress={() => Alert.alert("Hello world button")} // aparece cuadro en el celular
      />

      <TouchableOpacity //Boton personalizado
        style={styles.button}
        onPress={() => Alert.alert("Hello world touchable")}
      >
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>

      <TouchableOpacity //image picker
        style={styles.button}
        onPress={openImagePickerAsync}
      >
        <Text style={styles.buttonText}>ImagePicker</Text>
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
    backgroundColor: "#292929",
  },
  title: { fontSize: 30, color: "#ffffff" },

  image1: { height: 200, width: 200, resizeMode: 'contain'},

  image2: { height: 200, width: 200, borderRadius: 102 },

  button: {
    backgroundColor: "cyan",
    padding: 7,
    marginTop: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 20,
  },
});

export default App;