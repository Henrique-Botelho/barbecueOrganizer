import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MainContext } from "../context/mainContext";
// import MapView from "react-native-maps";

export default function Info(props) {
  const { data, setInfo, calculaChurrasco } = useContext(MainContext);

  const [name, setName] = useState(data.info.evento.nomeOrganizador);
  const [tel, setTel] = useState(data.info.evento.telefone);
  const [ender, setEnder] = useState(data.info.local.endereco);
  const [price, setPrice] = useState(data.info.local.custo);

  setInfo(name, tel, ender, price);

  return (
    <View style={styles.view}>
      <ImageBackground
        blurRadius={3}
        resizeMode="cover"
        opacity={0.48}
        source={require("../../assets/fundo.png")}
        style={styles.image}
      >
        <Text style={styles.textTitulo}>Informações</Text>
        <Text style={styles.text}>Evento</Text>
        <View>
          <Text style={styles.organizador}>Nome do Organizador:</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={setName}
            value={name}
          />
          <Text style={styles.organizador}>Telefone de Contato:</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={setTel}
            value={tel}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.text}>Local</Text>
        {/* <MapView 
                    style={styles.map}
                /> */}
        <View>
          <Text style={styles.organizador}>Endereço:</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={setEnder}
            value={ender}
          />
          <Text style={styles.organizador}>Custo:</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={setPrice}
            value={price}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            calculaChurrasco();
            props.navigation.navigate("resultados");
          }}
          style={styles.next}
        >
          <Text style={styles.textNext}>Prosseguir</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  image: {
    backgroundColor: "#000",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-evenly",
  },
  textTitulo: {
    backgroundColor: "#FFCE51",
    color: "#b43434",
    borderRadius: 10,
    padding: 10,
    fontSize: 25,
  },
  next: {
    backgroundColor: "#FFCE51",
    padding: 10,
    borderRadius: 20,
  },
  textNext: {
    fontSize: 20,
  },
  inputs: {
    borderColor: "#black",
    borderWidth: 2,
    borderRadius: 5,
    height: 25,
  },
  map: {
    height: 250,
    width: Dimensions.get("window").width,
  },
  organizador: {
    textAlign: "center",
    fontSize: 15,
    backgroundColor: "#FFCE51",
    letterSpacing: 2,
    color: "#b43434",
    borderRadius: 5,
    padding: 5,
    


  },
  text: {
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    letterSpacing: 2,
    backgroundColor: "#FFCE51",
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
  },
});
