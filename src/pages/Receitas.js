import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Modal, TouchableOpacity } from "react-native";

import ModalReceita from "../components/ModalReceita";

export default function Receitas(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [id, setID] = useState("");

  return (
    <View>
        <Text style={styles.titulo}>Carne bovina</Text>
            <TouchableOpacity onPress={() => {
              setIsEnabled(!isEnabled);
              setID("1");
            }}>
              <Text style={styles.btnTitle}>Contra-filé</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setIsEnabled(!isEnabled);
              setID("2");        
            }}>
              <Text style={styles.btnTitle}>Fraldinha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setIsEnabled(!isEnabled);
              setID("3");       
            }}>
              <Text style={styles.btnTitle}>Maminha</Text>
            </TouchableOpacity>


        <Text style={styles.titulo}>Carne suína</Text>   
            <TouchableOpacity onPress={() => {
              setIsEnabled(!isEnabled);
              setID("4");       
            }}>
              <Text style={styles.btnTitle}>Picanha Suína</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setIsEnabled(!isEnabled);
              setID("5");       
            }}>
              <Text style={styles.btnTitle}>Linguiça</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setIsEnabled(!isEnabled);
              setID("6");       
            }}>
              <Text style={styles.btnTitle}>Paleta</Text>
            </TouchableOpacity>


        <Text style={styles.titulo}>Frango</Text>
            <TouchableOpacity onPress={() => {
              setIsEnabled(!isEnabled);
              setID("7");       
            }}>
              <Text style={styles.btnTitle}>Coxa de frango</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setIsEnabled(!isEnabled);
              setID("8");       
            }}>
              <Text style={styles.btnTitle}>Asa de frango</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setIsEnabled(!isEnabled);
              setID("9");       
            }}>
              <Text style={styles.btnTitle}>Coração de frango</Text>
            </TouchableOpacity>

            {id && isEnabled ? <ModalReceita id={id} ativo={isEnabled}/> : ""}
    </View>
  );

}
const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  image: {
    backgroundColor: "#000",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-evenly",
  },
  receita: {},
});
