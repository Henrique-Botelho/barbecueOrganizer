import React, { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";
import Lista from "../components/Lista";
import ListaInfo from "../components/ListaInfo";
import ListaTotais from "../components/ListaTotais";

export default function Churras(props) {
    const {data, resetValores} = useContext(MainContext);

    console.log(data);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <TouchableOpacity
                    onPress={() => {
                        resetValores();
                        props.navigation.navigate("meusChurras");
                    }}
                    style={styles.next}>
                    <Text style={styles.textNext}>Voltar</Text>
                </TouchableOpacity>

                <Text>{data.info.nomeChurras}</Text>
                <View style={styles.lista}>
                    <Lista tipo="Carne Bovina" headers={["Assado", "Quantidade (kg)", "Preço (kg)", "Preço Total"]} />
                    <Lista tipo="Carne Suina" headers={false} />
                    <Lista tipo="Frango" headers={false} />
                    <Lista tipo="Bebidas" headers={["Bebida", "Quantidade (L)", "Preço (L)", "Preço Total"]} />
                    <Lista tipo="Acompanhamentos" headers={["Item", "Quantidade", "Preço", "Preço Total"]} />
                    <Lista tipo="Sem Falta" headers={["Item", "Quantidade", "Preço", "Preço Total"]} />
                    <ListaInfo />
                    <ListaTotais />
                </View>
                {console.log(data)}
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