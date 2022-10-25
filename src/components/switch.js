import React from "react";
import { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

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
            { ativo && id == 1 ? <View> <Text> 6 opções vegetarianas</Text> </View> : ""}
            { ativo && id == 2 ? <View> <Text> 6 opções veganas</Text> </View> : ""}
        </View>
    );
};

const styles = StyleSheet.create({});