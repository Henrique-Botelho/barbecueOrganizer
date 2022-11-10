import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList, TextInput } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Preco(props) {
    const {data, mudaPrecoItem} = useContext(MainContext);
    const [item, setItem] = useState(data.comidas[props.class][props.one].preco);

    mudaPrecoItem(props.class, props.one, item);

    return(
        <View style={styles.corpo}>
            <Text style={styles.textcarnes} >{props.nome} </Text>
            <Text style={styles.rs}>R$ </Text>
            <TextInput
                style={styles.inputs}
                onChangeText={setItem}
                value={item}
                keyboardType="numeric"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    corpo: {
        flexDirection: "row",
        alignItems:"center",
        flex:1,
        borderWidth: 0.1,
        borderColor: "black",
        borderRadius: 5,
        margin: 2,
        backgroundColor: '#FFCE51'
    },
    textcarnes: {
        letterSpacing: 1,
        fontSize: 18,
        // fontWeight:600,
        width:200,
        paddingLeft:5,
    },
    rs:{
        // fontWeight:600,
    },
    inputs: {
        borderColor: '#b43434',
        borderRadius: 5,
        borderWidth: 3,
        fontSize: 18,
        width:100,
        paddingLeft:5,
    }
})