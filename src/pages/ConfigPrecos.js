import React, { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList, TextInput } from "react-native";
import { MainContext } from "../context/mainContext";
import CarregaPrecos from "../components/CarregaPrecos";

export default function ConfigPrecos(props) {

    const {data} = useContext(MainContext);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
            
            <Text>Configure o preço de cada item:</Text>

            <View style={styles.fundo}>
                <CarregaPrecos type="Carne Bovina" />
                <CarregaPrecos type="Carne Suina" />
                <CarregaPrecos type="Frango" />
                <CarregaPrecos type="Bebidas" />
                <CarregaPrecos type="Acompanhamentos" />
                <CarregaPrecos type="Sem Falta" />
            </View>

            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('home');
                }}
                style={styles.next}
            >
                <Text style={styles.textNext}>Salvar</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#FFCE51'
    },
    view: {
        flex: 1
    },
    image:{
        backgroundColor: "#000",
        alignItems: 'center',
        flex: 1,
        justifyContent: "space-evenly"
    },
    meat:{
        width: 200,
        height: 200
    },
    btn:{
        backgroundColor: "#FFCE51",
        borderRadius: 10,
        flexDirection: "row",
        alignSelf: "center",
        padding: 20
    },
    text:{
        fontWeight:600,
        fontSize: 25,
        alignSelf: "center",
        height: 35,
        letterSpacing: 2,
    },
    box: {
        backgroundColor: '#fff'
    }
  })