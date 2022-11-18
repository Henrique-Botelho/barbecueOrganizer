import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";

import api from "../services/api";

export default function Mapa(){
    const [marker, setMarker] = useState({
        lat: -23.647874097687232,
        long: -46.721607053968
      });
    
      const [region, setRegion] = useState({
        latitude: -23.647874097687232,
        longitude: -46.721607053968,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    
      const [cep, setCep] = useState(0);
    
        function changeRegion(latitude, longitude) {
          setRegion({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }
    
        function changeMarker() {
          const buscaData = async () => {
            try {
              const response = await api.get(`search?postalcode=${cep}&format=json`);
              console.log(response.data[0]);
              const latitude = JSON.parse(response.data[0].lat);
              const longitude = JSON.parse(response.data[0].lon);
        
              setMarker({
                lat: latitude,
                long: longitude,
              });
    
              changeRegion(latitude, longitude);
    
            } catch (error) {
              console.log(error);
            }
          }
    
          buscaData();
        }
    
          return (
            <View style={styles.container}>
              <MapView
                style={styles.mapa}
                region={ region }
                onRegionChangeComplete={(region) => setRegion(region)}>
                  <Marker coordinate={
                    { 
                      latitude: marker.lat,
                      longitude: marker.long
                    }
                  }/>
              </MapView>
    
              <TextInput 
                onChangeText={setCep}
                value={cep}
                placeholder="CEP:"
                style={styles.inputs}
              />
              <TouchableOpacity onPress={changeMarker} style={styles.btn}>
                 <Text style={styles.textBtn}>Enviar</Text>
              </TouchableOpacity>
            </View>
          );  
        
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3'
    },
    mapa: {
        height: 300,
        width: Dimensions.get('window').width,
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
        height: 50,
        textAlign: "center",
        opacity: 0.8,
        color: "#fc0000",
        letterSpacing: 2,
        marginTop: 15,
        marginHorizontal: 10,
      },
      btn: {
        marginTop: 10,
        backgroundColor: "#FFCE51",
      },
      textBtn: {
        color: '#b43434',
        fontSize: 24,
      }
});