import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";
import Lista from "../components/Lista";
import ListaInfo from "../components/ListaInfo";
import ListaTotais from "../components/ListaTotais";

export default function Resultados(props) {
    const {data, armazenaChurrasco, resetValores} = useContext(MainContext);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Resultados</Text>

                <Text>{data.info.nomeChurras}</Text>
                <View style={styles.container}>
                    <View style={styles.lista}>
                        <View style={styles.containerF}>
                            <Lista tipo="Carne Bovina" headers={["Assado", "Quantidade (kg)", "Preço (kg)", "Preço Total"]} />
                        </View>
                        <View style={styles.containerF}>
                            <Lista tipo="Carne Suina" headers={false} />
                        </View>
                        <View style={styles.containerF}>
                            <Lista tipo="Frango" headers={false} />
                        </View>
                        <View style={styles.containerF}>
                            <Lista tipo="Bebidas" headers={["Bebida", "Quantidade (L)", "Preço (L)", "Preço Total"]} />
                        </View>
                        <View style={styles.containerF}>
                            <Lista tipo="Acompanhamentos" headers={["Item", "Quantidade", "Preço", "Preço Total"]} />
                        </View>
                        <View style={styles.containerF}>
                            <Lista tipo="Sem Falta" headers={["Item", "Quantidade", "Preço", "Preço Total"]} />
                        </View>
                        <ListaInfo />
                        <ListaTotais />
                    </View>
                </View>


                <TouchableOpacity
                    onPress={() => {
                        armazenaChurrasco();
                        resetValores();
                        props.navigation.navigate("home");
                    }}
                    style={styles.next}>
                    <Text style={styles.textNext}>Salvar Churrasco</Text>
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
    
    container:{
        flex: 1,
        flexDirection:"row",
        justifyContent: "center",
        marginTop:10,
        color:"#fff",
        // height: 40,
        backgroundColor: "#b43434"
    },
    containerF:{
        flex: 1,
        flexDirection:"row",
        justifyContent: "center",
        marginTop:5,
        marginBottom:5,
    },

    next: {
        backgroundColor: "#FFCE51",
        padding: 10,
        borderRadius: 20,
        margin:20,
    },
    textNext: {
        color: "#b43434",
        fontSize: 20,
    },

    textNext: {
        fontSize: 20        
    },
    resultados: {
        backgroundColor: "#FFF",
        fontSize: 20
    },
    lista: {
        
    },
    totais: {
        textAlign: 'center',
    }
})