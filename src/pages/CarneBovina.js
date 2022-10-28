import React, { useState } from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Carnes(){
    const {data} = useContext(MainContext);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                
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
    textEstimativa: {
        backgroundColor: '#FFCE51',
        color: '#b43434',
    }
})