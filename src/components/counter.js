import react from "react";
import { useState } from "react";
import {View, Text, TouchableHighlight, StyleSheet} from "react-native";

export default function InputQuantidades(props){
    //props para verificar se estamos acrescentando homens, mulheres ou crianças (desenvolver a lógica depois)
    const [count, setCount] = useState(0);
    const [decount, setDecount] = useState(false);
    let countState = count;
    //funções para atualizar a variável no click do botão
    function onPress (){
        setCount(count + 1);
    } 
    function onPress2 (){
        setCount(count - 1);
        setDecount(true);
    }
    return(
        <View style={styles.container}>
            <TouchableHighlight onPress={onPress}>
                <View style={styles.button}>
                    <Text>Acrescentar</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.countContainer}>
                <Text style={styles.counText}>{countState || null}</Text>
            </View>
            <TouchableHighlight onPress={onPress2}>
                <View style={styles.button}>
                    <Text>Decrementar</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.countContainer}>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    button: {
        backgroundColor: '#d3d3d3',
        marginHorizontal: 7,
    },
});