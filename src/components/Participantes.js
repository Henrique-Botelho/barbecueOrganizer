import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MainContext } from "../context/mainContext";
import { processFontFamily } from "expo-font";
import { transform } from "@babel/core";

export default function Participantes (props) {
    const {adicionaPessoas, somaPessoas} = useContext(MainContext);
    const [quantidade, setQuantidade] = useState(0);

    adicionaPessoas(props.pessoa, quantidade);
    somaPessoas();

    return (
        <View style={styles.convidados}>
            <Text style={styles.genero}>{props.pessoa}</Text>
            <View style={styles.pessoas}>
                <TouchableOpacity onPress={() => {if (quantidade == 0) {setQuantidade(quantidade)} else {setQuantidade(quantidade - 1)}}}>
                    <Text>-</Text>
                </TouchableOpacity>
                <Text>{quantidade}</Text>
                <TouchableOpacity
                    onPress={() => {setQuantidade(quantidade + 1)}}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    pessoas:{
        borderRadius: 5,
        borderWidth: 5,
        borderColor: "blue",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    genero:{
        borderRadius: 5,
        borderWidth: 5,
        borderColor: "red",
        fontSize: 20,
        fontFamily: 'Arial',
        textTransform: "capitalize"
        

    },
});