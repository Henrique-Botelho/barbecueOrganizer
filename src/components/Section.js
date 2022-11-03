import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MainContext } from "../context/mainContext";
import Item from "./Item";

export default function Section(props) {
    const {data} = useContext(MainContext);
    let typeFood = data.comidas[props.tipo]

    return (
        <View style={styles.view}>
            <Text style={styles.titulo}>{props.tipo}</Text>
            {typeFood.map((element, index) => {return <Item class={props.tipo} name={element.nome} position={index} />})}
        </View>
    );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    letterSpacing: 2,
    backgroundColor: "#FFCE51",
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
    
  },
});