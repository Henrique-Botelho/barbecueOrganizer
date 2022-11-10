import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Dimensions, Alert } from "react-native";
import { MainContext } from "../context/mainContext";
import api from "../services/api";
// import MapView from "react-native-maps";
// import api from "./src/services/api";
// import { Marker } from "react-native-maps";

export default function Info(props) {
  // const [dados, setDados] = useState({
  //   lat: -23.647874097687232,
  //   long: -46.721607053968
  // });

  // const [region, setRegion] = useState({
  //   latitude: -23.647874097687232,
  //   longitude: -46.721607053968,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // });

  // const [cep, setCep] = useState(0);

  //   function changeRegion(latitude, longitude) {
  //     setRegion({
  //       latitude: latitude,
  //       longitude: longitude,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     });
  //   }

  //   function changeMarker() {
  //     const buscaData = async () => {
  //       try {
  //         if(ender){
  //           const response = await api.get(`search?street=${ender}&format=json`);
  //           console.log(response.data[0]);
  //           const latitude = JSON.parse(response.data[0].lat);
  //           const longitude = JSON.parse(response.data[0].lon);
      
  //           setDados({
  //             lat: latitude,
  //             long: longitude,
  //           });
  
  //           changeRegion(latitude, longitude);
            
  //         } else if(cep){
  //           (async () => {
  //             const response = await api.get(`search?postalcode=${cep}&format=json`);
  //             const latitude = JSON.parse(response.data[0].lat);
  //             const longitude = JSON.parse(response.data[0].lon);

  //             setDados({
  //               lat: latitude,
  //               long: longitude,
  //             });
    
  //             changeRegion(latitude, longitude);
  //           })();
  //         } else {
  //           Alert.alert("Nenhum valor enviado.");
  //         }

  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }

  //     buscaData();
  //   }

  const { data, setInfo, calculaChurrasco, precoTotal } = useContext(MainContext);

  const [ender, setEnder] = useState(data.info.local.endereco);
  const [name, setName] = useState(data.info.evento.nomeOrganizador);
  const [tel, setTel] = useState(data.info.evento.telefone);
  const [price, setPrice] = useState(data.info.local.custo);
  const [nomeChurras, setNomeChurras] = useState(data.info.nomeChurras);

  const [semNome, setSemNome] = useState(false);

  const nomeSemEspacos = nomeChurras.trim();

  setInfo(name, tel, ender, price, nomeSemEspacos);

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
        <Text style={styles.organizador}>Nome do Churrasco:</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={setNomeChurras}
            value={nomeChurras}
          />
        <Text style={styles.text}>Evento</Text>
        <View style={styles.box}>
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
            region={ region }
            onRegionChangeComplete={(region) => setRegion(region)}>
              <Marker coordinate={
                { 
                  latitude: dados.lat,
                  longitude: dados.long,
                }
              }/>
          </MapView> */}
        <View style={styles.box}>
          <Text style={styles.organizador}>Endereço:</Text>
          {/* <TextInput
            style={styles.inputs}
            onChangeText={setEnder}
            value={ender}
          />
          <Text> ou </Text>
          <Text style={styles.organizador}>CEP:</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={setCep}
            value={cep}
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={changeMarker}>
             <Text>Enviar</Text>
          </TouchableOpacity> */}
          <Text style={styles.organizador}>Custo:</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={setPrice}
            value={price}
            keyboardType="numeric"
          />
        </View>
        {semNome ? <View><Text>O seu churrasco deve ter um nome</Text></View> : null}
        <TouchableOpacity
          onPress={() => {
            if (data.info.nomeChurras == "") {
              setSemNome(true);
            } else {
              setSemNome(false);
              calculaChurrasco();
              precoTotal();
              props.navigation.navigate("resultados");
            }
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
    borderWidth: 3,
    borderRadius: 5,
    height: 25,
    padding: 5,
    backgroundColor: "#ede6c7",
    marginTop: 2,
    marginBottom: 2,
    width: 300,
    height: 50,
    textAlign: "center",
    opacity: 0.8,
    color: "#fc0000",
    letterSpacing: 2,
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
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  box: {
    width: 300,
  },
});
