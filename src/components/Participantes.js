import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

export default function Participantes() {
    const [man, setMan] = useState(0);
    const [woman, setWoman] = useState(0);
    const [child, setChild] = useState(0);

    return(
        <View style={styles.view}>
            <View style={styles.item}>
                <Text style={styles.text}>Homens</Text>
                <View style={styles.numbers}>
                    <TouchableOpacity
                        style={styles.controls}
                        onPress={() => {
                            setMan(man - 1)
                        }}
                    >-</TouchableOpacity>

                    <Text style={styles.value}>{man}</Text>

                    <TouchableOpacity
                        style={styles.controls}
                        onPress={() => {
                            setMan(man + 1)
                        }}
                    >+</TouchableOpacity>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Mulheres</Text>
                <View style={styles.numbers}>
                    <TouchableOpacity
                        style={styles.controls}
                        onPress={() => {
                            setWoman(woman - 1)
                        }}
                    >-</TouchableOpacity>

                    <Text style={styles.value}>{woman}</Text>

                    <TouchableOpacity
                        style={styles.controls}
                        onPress={() => {
                            setWoman(woman + 1)
                        }}
                    >+</TouchableOpacity>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Crianças</Text>
                <View style={styles.numbers}>
                    <TouchableOpacity
                        style={styles.controls}
                        onPress={() =>{
                            setChild(child - 1);
                        }}
                    >-</TouchableOpacity>

                    <Text style={styles.value}>{child}</Text>

                    <TouchableOpacity
                        style={styles.controls}
                        onPress={() => {
                            setChild(child + 1)
                        }}
                    >+</TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const{ width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    view:{
        justifyContent: "space-evenly",
        flex: 0.5,
        borderWidth: 5,
        borderColor: "blue"
    },
    item:{
        flexDirection: 'row',
        backgroundColor: '#FFCE51',
        justifyContent: "space-around",
        borderRadius: 20,
        width: width,
        borderWidth: 5,
        borderColor: "green"
    },
    numbers: {
        flexDirection: 'row',
        borderWidth: 5,
        borderColor: "black",
        width: 200,
        justifyContent: "space-around"
    },
    controls:{
        fontSize: 30
    },
    value: {
        fontSize: 30
    },
    text:{
        borderWidth: 5,
        borderColor: "red",
        alignSelf: "center",
        fontSize: 20
    }
});