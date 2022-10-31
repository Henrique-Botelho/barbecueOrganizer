import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import Participantes from "../components/Participantes";
import { MainContext } from "../context/mainContext";

export default function Pessoas(props) {
    const {data} = useContext(MainContext);
    const [ninguem, setNinguem] = useState(false);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Quantas pessoas?</Text>
                <Participantes pessoa="Homens" />
                <Participantes pessoa="Mulheres" />
                <Participantes pessoa="Crianças" />
                {ninguem ? <Text>Adicione uma pessoa</Text> : null}
                <TouchableOpacity
                    onPress={() => { if(data.pessoas.total == 0) {setNinguem(true)} else{setNinguem(false); props.navigation.navigate("assados")}}} style={styles.next}>
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
    next: {
        backgroundColor: "#FFCE51",
        padding: 10,
        borderRadius: 20
    },
    textNext: {
        fontSize: 20        
    }
})

//     itens: {
//         flex: 0.8,
//         justifyContent: "space-evenly"
//     },
//     item: {
//         backgroundColor: "#FFCE51",
//         flexDirection: "row",
//         padding: 10,
//         borderRadius: 20,
//         width: 300
//     },
//     name: {
//         flex: 1,
//         alignSelf: "center",
//         fontSize: 20
//     },
//     controles: {
//         flex: 1,
//         alignSelf: "center",
//         flexDirection: "row",
//         justifyContent: "space-around"
//     },
//     valor: {
//         fontSize: 30
//     },
//     btns: {
//         fontSize: 30
//     }