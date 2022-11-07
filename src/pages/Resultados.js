import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";
import Lista from "../components/Lista";
import ListaBebidas from "../components/ListaBebidas";
import ListaAcompanhamentos from "../components/ListaAcompanhamentos";

export default function Resultados(props) {
    const {data} = useContext(MainContext);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Resultados</Text>
                
                <Text style={styles.resultados}>Total de Assados: {data.comidas.totalItensAssados}</Text>
                <Text style={styles.resultados}>Total de bebidas: {data.comidas.totalItensBebidas}</Text>
                <Text style={styles.resultados}>Total de bebidas para crianças: {data.comidas.totalItensBebidasCriancas}</Text>
                <Text style={styles.resultados}>Total de quilos de carne: {data.comidas.totalCarne} kg</Text>
                <Text style={styles.resultados}>Total de litros de bebidas: {data.comidas.totalLitrosAdultos} L</Text>
                <Text style={styles.resultados}>Total de litros de bebidas crianças: {data.comidas.totalLitrosCriancas} L</Text>


                <View style={styles.lista}>
                    <Text>Assados</Text>
                    <Lista />
                    <Text>Bebidas</Text>
                    <ListaBebidas />
                    <Text>Acompanhamentos</Text>
                    <ListaAcompanhamentos />
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