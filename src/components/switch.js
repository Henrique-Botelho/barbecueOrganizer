import React from "react";
import { useState } from "react";
import { View, Text, Switch, StyleSheet, SafeAreaView } from "react-native";
import Participantes from "./Participantes";

export default function SwitchButton(props){
    const id = props.id;
    const [ativo, setAtivo] = useState(false);
    const toggleSwitch = () => setAtivo(previousState => !previousState);

    return(
        <View style={styles.container}>
            <Switch 
                onValueChange = {toggleSwitch}
                value = {ativo}
                trackColor = {{false: "#767577", true: "#81b0ff"}}
                thumbColor = {ativo ? "#00BFFF": "#FFF0F5"}
            /> 
            { ativo && id == 2 ? <View style={styles.opcoes}> <Participantes tipoComida={["Homens Vegetarianos", "Mulheres Vegetarianas", "Crianças Vegetarianas"]} /> 
            </View> : ""}
            { ativo && id == 3 ? <View style={styles.opcoes}> <Participantes tipoComida={["Homens Veganos", "Mulheres Veganas", "Crianças Veganas"]} /> </View> : ""}
        </View>
    );
};

const styles = StyleSheet.create({
    opcoes: {
        paddingVertical: 20,
        display: "flex",
        flexDirection: "column",
    }
});