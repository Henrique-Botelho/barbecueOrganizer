import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CardAlimento(props){
    const id = props.id;

    const [isSelected, setSelected] = useState(false);
    const onPress = () => setSelected(previousState => !previousState);

    switch(id){
        case "1":
            // fazer array com tipos de carnes e alimentos p/ cada situação e usar um for parar exibir todos
            //for 1
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={onPress}
                    >Contra Filé</TouchableOpacity>
                </View>
            );
        case "2":
            //for 2
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={onPress}
                    >Queijo</TouchableOpacity>
                </View>
            );
        case "3":
            //for 3
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={onPress}
                    >Abacaxi</TouchableOpacity>
                </View>
            );
        default:
            return <View> </View>;
    }
}

const styles = StyleSheet.create({});