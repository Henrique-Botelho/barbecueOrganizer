import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MainContext } from "../context/mainContext";
<<<<<<< HEAD
import { processFontFamily } from "expo-font";
import { transform } from "@babel/core";
=======
>>>>>>> parent of 23ebfeb (Estilização)

export default function Participantes (props) {
    const {adicionaPessoas, somaPessoas} = useContext(MainContext);
    const [quantidade, setQuantidade] = useState(0);

    adicionaPessoas(props.pessoa, quantidade);
    somaPessoas();

    return (
        <View>
            <Text>{props.pessoa}</Text>
            <View>
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