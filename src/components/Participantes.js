import React,  { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { MainContext } from "../context/mainContext";


export default function Participantes(props) {
    const [man, setMan] = useState(props.quantidade[0]);
    const [woman, setWoman] = useState(props.quantidade[1]);
    const [child, setChild] = useState(props.quantidade[2]);
    const [control, setControl] = useState(true);
    
    return(
        <View style={styles.view}>
            <View style={styles.item}>
                <Text style={styles.text}>{props.tipoComida[0]}</Text>
                <View style={styles.numbers}>
                    <TouchableOpacity
                        disabled={control}
                        style={styles.controls}
                        onPress={() => {
                            setMan(man - 1);
                            if (man == 1){
                                setControl(true);
                            }
                        }}
                    >-</TouchableOpacity>

                    <Text style={styles.value}>{man}</Text>

                    <TouchableOpacity
                        style={styles.controls}
                        onPress={() => {
                            setMan(man + 1);
                            if (man > 0){
                                setControl(false);
                            }
                        }}
                    >+</TouchableOpacity>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>{props.tipoComida[1]}</Text>
                <View style={styles.numbers}>
                    <TouchableOpacity
                        disabled={control}
                        style={styles.controls}
                        onPress={() => {
                            setWoman(woman - 1)
                            if (woman == 1){
                                setControl(true);
                            }
                        }}
                    >-</TouchableOpacity>

                    <Text style={styles.value}>{woman}</Text>

                    <TouchableOpacity
                        style={styles.controls}
                        onPress={() => {
                            setWoman(woman + 1);
                            if (woman > 0){
                                setControl(false);
                            }
                        }}
                    >+</TouchableOpacity>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>{props.tipoComida[2]}</Text>
                <View style={styles.numbers}>
                    <TouchableOpacity
                        disabled={control}
                        style={styles.controls}
                        onPress={() =>{
                            setChild(child - 1);
                            if (child == 1){
                                setControl(true);
                            }
                        }}
                    >-</TouchableOpacity>

                    <Text style={styles.value}>{child}</Text>

                    <TouchableOpacity
                        style={styles.controls}
                        onPress={() => {
                            setChild(child + 1);
                            if (child > 0){
                                setControl(false);
                            }
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
        fontSize: 12
    }
});