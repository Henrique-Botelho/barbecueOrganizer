import React from "react";
import {View, Text, StyleSheet, ImageBackground} from "react-native";
import SwitchButton from "../components/switch";
import Participantes from "../components/Participantes";

export default function Pessoas() {
    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Quantas pessoas?</Text>
                <Participantes />
                <View style={styles.opcoes}>
                    <View style={styles.abrir}>
                        <Text>Há pessoas vegetarianas?</Text>
                        <SwitchButton id={1}/>
                    </View>
                    <View style={styles.abrir}>
                        <Text>Há pessoas veganas?</Text>
                        <SwitchButton id={2}/>
                    </View>
                </View>
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
    opcoes: {

    },
    abrir: {
        flexDirection: "row"
    }
  })