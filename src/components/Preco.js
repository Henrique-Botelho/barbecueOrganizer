import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList, TextInput } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Preco(props) {
    const {data, mudaPrecoItem} = useContext(MainContext);
    const [item, setItem] = useState(data.comidas[props.class][props.one].preco);

    mudaPrecoItem(props.class, props.one, item);

    return(
        <View style={styles.corpo}>
            <Text>{props.nome} </Text>
            <Text>R$ </Text>
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
        flexDirection: "row"
    },
    inputs: {
        borderColor: '#fff',
        borderWidth: 3
    }
})