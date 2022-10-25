import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Participantes() {
    let valor = 0;
    return(
        <View>
            <View>
                <Text>Homens</Text>
                <View>
                    <TouchableOpacity>-</TouchableOpacity>
                    <Text>{valor}</Text>
                    <TouchableOpacity>+</TouchableOpacity>
                </View>
            </View>
            <View>
                <Text>Mulheres</Text>
                <View>
                    <TouchableOpacity>-</TouchableOpacity>
                    <Text>{valor}</Text>
                    <TouchableOpacity>+</TouchableOpacity>
                </View>
            </View>
            <View>
                <Text>Crianças</Text>
                <View>
                    <TouchableOpacity>-</TouchableOpacity>
                    <Text>{valor}</Text>
                    <TouchableOpacity>+</TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});