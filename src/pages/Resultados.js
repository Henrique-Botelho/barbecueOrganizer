import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";
import Lista from "../components/Lista";
import ListaInfo from "../components/ListaInfo";

export default function Resultados(props) {
    const {data} = useContext(MainContext);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Resultados</Text>

                <View style={styles.lista}>
                    <Lista tipo="Carne Bovina" headers={["Assado", "Quantidade (kg)", "Preço (kg)", "Preço Total"]} />
                    <Lista tipo="Carne Suina" headers={false} />
                    <Lista tipo="Frango" headers={false} />
                    <Lista tipo="Bebidas" headers={["Bebida", "Quantidade (L)", "Preço (L)", "Preço Total"]} />
                    <Lista tipo="Acompanhamentos" headers={["Item", "Quantidade", "Preço", "Preço Total"]} />
                    <Lista tipo="Sem Falta" headers={["Item", "Quantidade", "Preço", "Preço Total"]} />
                    <ListaInfo />
                </View>

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
    next: {
        backgroundColor: "#FFCE51",
        padding: 10,
        borderRadius: 20
    },
    textNext: {
        fontSize: 20        
    },
    resultados: {
        backgroundColor: "#FFF",
        fontSize: 20
    },
    lista: {
        backgroundColor: "#b43434"
    },
    totais: {
        textAlign: 'center',
    }
})