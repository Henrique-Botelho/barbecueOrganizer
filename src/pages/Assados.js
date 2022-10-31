import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Assados() {

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Escolha seus Assados</Text>
                
                <TouchableOpacity
                    onPress={() => {}} style={styles.next}>
                    <Text style={styles.textNext}>Prosseguir</Text>
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
    itens: {
        flex: 0.8,
        justifyContent: "space-evenly"
    },
    item: {
        backgroundColor: "#FFCE51",
        flexDirection: "row",
        padding: 10,
        borderRadius: 20,
        width: 300
    },
    name: {
        flex: 1,
        alignSelf: "center",
        fontSize: 20
    },
    controles: {
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    valor: {
        fontSize: 30
    },
    btns: {
        fontSize: 30
    },
    next: {
        backgroundColor: "#FFCE51",
        padding: 10,
        borderRadius: 20
    },
    textNext: {
        fontSize: 20        
    },
    texto: {
        backgroundColor: "#fff",
        fontSize: 20
    }
})