import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MainContext } from "../context/mainContext";

export default function Pessoas(props) {
    const { contaPessoas } = useContext(MainContext);

    let [man, setMan] = useState(0);
    let [woman, setWoman] = useState(0);
    let [child, setChild] = useState(0);
    const [control ,setControl] = useState(false);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Quantas pessoas?</Text>
                <View style={styles.itens}>
                    <View style={styles.item}>
                        <Text style={styles.name}>Homens</Text>
                        <View style={styles.controles}>
                            <TouchableOpacity disabled={control} onPress={() => {setMan(man - 1); if (man == 1) {setControl(true)}}}>
                                <Text style={styles.btns}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.valor}>{man}</Text>
                            <TouchableOpacity
                                onPress={() => {setMan(man + 1); setControl(false)}}>
                                <Text style={styles.btns}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.name}>Mulheres</Text>
                        <View style={styles.controles}>
                            <TouchableOpacity disabled={control} onPress={() => {setWoman(woman - 1); if (man == 1) {setControl(true)}}}>
                                <Text style={styles.btns}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.valor}>{woman}</Text>
                            <TouchableOpacity
                                onPress={() => {setWoman(woman + 1); setControl(false)}}>
                                <Text style={styles.btns}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.name}>Crianças</Text>
                        <View style={styles.controles}>
                            <TouchableOpacity disabled={control} onPress={() => {setChild(child - 1); if (man == 1) {setControl(true)}}}>
                                <Text style={styles.btns}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.valor}>{child}</Text>
                            <TouchableOpacity
                                onPress={() => {setChild(child + 1); setControl(false)}}>
                                <Text style={styles.btns}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => {contaPessoas(); props.navigation.navigate("carnes")}} style={styles.next}>
                    <Text style={styles.textNext}>Prosseguir</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    image:{
      backgroundColor: "#000",
      alignItems: 'center',
      flex: 1,
      justifyContent: "space-evenly"
    },
    textTitulo: {
        backgroundColor: '#FFCE51',
        color: '#b43434',
        borderRadius: 10,
        padding: 10,
        fontSize: 25,
    },
    itens: {
        flex: 0.8,
        justifyContent: "space-evenly"
    },
    item: {
        backgroundColor: "#FFCE51",
        flexDirection: "row",
        padding: 10,
        borderRadius: 20,
        width: 300
    },
    name: {
        flex: 1,
        alignSelf: "center",
        fontSize: 20
    },
    controles: {
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    valor: {
        fontSize: 30
    },
    btns: {
        fontSize: 30
    },
    next: {
        backgroundColor: "#FFCE51",
        padding: 10,
        borderRadius: 20
    },
    textNext: {
        fontSize: 20        
    }
  })