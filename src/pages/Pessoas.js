import React, { useState } from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Participantes from "../components/Participantes";
import { MainContext } from "../context/mainContext";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Pessoas(props) {
    const {pessoas, data} = useContext(MainContext);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Quantas pessoas?</Text>
                <Participantes pessoas={[pessoas.homens,pessoas.mulheres, pessoas.criancas]} />
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("carnes")}>
                    Prosseguir
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