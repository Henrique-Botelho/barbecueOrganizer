import React, { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList, TextInput } from "react-native";
import { MainContext } from "../context/mainContext";
import CarregaPrecos from "../components/CarregaPrecos";
import { ScrollView } from "react-native-web";

export default function ConfigPrecos(props) {

    const {data} = useContext(MainContext);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
            
            <Text style={styles.textTitulo}>Configure o preço de cada item:</Text>
            <ScrollView style={styles.scrollView}>
                <View style={styles.fundo}>
                    <View style={styles.container}>
                        <CarregaPrecos type="Carne Bovina" />
                    </View>
                    <CarregaPrecos type="Carne Suina" />
                    <CarregaPrecos type="Frango" />
                    <CarregaPrecos type="Bebidas" />
                    <CarregaPrecos type="Acompanhamentos" />
                    <CarregaPrecos type="Sem Falta" />
                </View>
            </ScrollView>
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
    scrollView:{
        height: 0,
    },
    view: {
        flex: 1
    },
    textTitulo: {
        alignSelf:"center",
        textAlign:"center",
        backgroundColor: '#FFCE51',
        color: '#b43434',
        borderRadius: 10,
        padding: 10,
        fontSize: 25,
        fontWeight:600,
        margin:15,
    },
    image:{
        backgroundColor: "#000",
        alignItems: 'center',
        flex: 1,
        justifyContent: "space-evenly"
    },
    // fundo: {
    //     backgroundColor: '#000',
    //     borderRadius:5,
    // },
    container:{
        flex: 1,
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    next: {
        backgroundColor: "#FFCE51",
        padding: 10,
        borderRadius: 15,
        margin:15,
    },
    textNext: {
        alignSelf:"center",
        fontWeight:600,
        color: '#b43434',
        fontSize: 25,
    }
  })