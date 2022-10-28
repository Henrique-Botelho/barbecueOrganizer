import React,  { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { MainContext } from "../context/mainContext";


export default function Participantes(props) {

    const {pessoas, data} = useContext(MainContext);

    const [man, setMan] = useState(props.pessoas[0]);
    const [woman, setWoman] = useState(props.pessoas[1]);
    const [child, setChild] = useState(props.pessoas[2]);
    const [control, setControl] = useState(true);

    pessoas.homens = man;
    pessoas.mulheres = woman;
    pessoas.criancas = child;
    pessoas.total = pessoas.homens + pessoas.mulheres + pessoas.criancas;
    data.total = (pessoas.homens * 0.6) + (pessoas.mulheres * 0.4) + (pessoas.criancas * 0.25);
    
    return(
        <View style={styles.view}>
            <View style={styles.item}>
                <Text style={styles.text}>Homens</Text>
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
                    >
                        <Text style={styles.controls}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.value}>{man}</Text>

                    <TouchableOpacity
                        style={styles.controls}
                        onPress={() => {
                            setValores(man + 1);
                            if (man > 0){
                                setControl(false);
                            }
                        }}
                    >
                        <Text style={styles.controls}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Mulheres</Text>
                <View style={styles.numbers}>
                    <TouchableOpacity
                        disabled={control}
                        style={styles.controls}
                        onPress={() => {
                            setValores(woman - 1)
                            if (woman == 1){
                                setControl(true);
                            }
                        }}
                    >
                        <Text style={styles.controls}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.value}>{woman}</Text>

                    <TouchableOpacity
                        style={styles.controls}
                        onPress={() => {
                            setValores(woman + 1);
                            if (woman > 0){
                                setControl(false);
                            }
                        }}
                    >
                        <Text style={styles.controls}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Crianças</Text>
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
                    >
                        <Text style={styles.controls}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.value}>{child}</Text>

                    <TouchableOpacity
                        onPress={() => {
                            setChild(child + 1);
                            if (child > 0){
                                setControl(false);
                            }
                        }}
                    >
                        <Text style={styles.controls}>+</Text>
                    </TouchableOpacity>
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