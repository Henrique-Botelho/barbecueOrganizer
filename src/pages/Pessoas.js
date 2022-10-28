import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Participantes from "../components/Participantes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MainContext } from "../context/mainContext";


export default function Pessoas(props) {
    const getdata = (value) => {
        return value;
    }
    const {pessoas} = useContext(MainContext);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Quantas pessoas?</Text>
                <Participantes total={getdata} />
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("carnes")}>
                    <Text>{pessoas.total}</Text>
                    <Text>Prosseguir</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    image:{
      backgroundColor: "#000",
      alignItems: 'center',
      flex: 1,
      justifyContent: "space-evenly"
    },
    textTitulo: {
        backgroundColor: '#FFCE51',
        color: '#b43434',
        borderRadius: 10,
        padding: 10,
        fontSize: 25,
    },
    abrir: {
        flexDirection: "row"
    }
  })