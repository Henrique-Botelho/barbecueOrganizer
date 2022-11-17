import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

import ModalReceita from "../components/ModalReceita";

export default function Receitas(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [id, setID] = useState("");

  return (
    <View style={styles.view}>
      <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
        <View>
          <Text style={styles.titulo}>Carne bovina</Text>
          <View style={styles.safeview}>
              <TouchableOpacity onPress={() => {
                setIsEnabled(!isEnabled);
                setID("1");
              }}
              style={styles.btn}>
                <Text style={styles.btnTitle}>Contra-filé</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setIsEnabled(!isEnabled);
                setID("2");        
              }}
              style={styles.btn}>
                <Text style={styles.btnTitle}>Fraldinha</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setIsEnabled(!isEnabled);
                setID("3");       
              }}
              style={styles.btn}>
                <Text style={styles.btnTitle}>Maminha</Text>
              </TouchableOpacity>
          </View>


          <Text style={styles.titulo}>Carne suína</Text>  
          <View style={styles.safeview}>
              <TouchableOpacity onPress={() => {
                setIsEnabled(!isEnabled);
                setID("4");       
              }}
              style={styles.btn}>
                <Text style={styles.btnTitle}>Picanha Suína</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setIsEnabled(!isEnabled);
                setID("5");       
              }}
              style={styles.btn}>
                <Text style={styles.btnTitle}>Linguiça</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setIsEnabled(!isEnabled);
                setID("6");       
              }}
              style={styles.btn}>
                <Text style={styles.btnTitle}>Paleta</Text>
              </TouchableOpacity>
          </View> 


          <Text style={styles.titulo}>Frango</Text>
          <View style={styles.safeview}>
              <TouchableOpacity onPress={() => {
                setIsEnabled(!isEnabled);
                setID("7");       
              }}
              style={styles.btn}>
                <Text style={styles.btnTitle}>Coxa de frango</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setIsEnabled(!isEnabled);
                setID("8");       
              }}
              style={styles.btn}>
                <Text style={styles.btnTitle}>Asa de frango</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setIsEnabled(!isEnabled);
                setID("9");       
              }}
              style={styles.btn}>
                <Text style={styles.btnTitle}>Coração de frango</Text>
              </TouchableOpacity>
          </View>

              {id && isEnabled ? <ModalReceita id={id} ativo={isEnabled}/> : ""}
        </View>
      </ImageBackground>
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
    justifyContent: "space-around",
  },

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
  safeview:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
  },
  btn: {
    backgroundColor: '#ede6c7',
    marginBottom: 15,
    marginHorizontal: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ede6c7",
    borderRadius: 5,
    width: 350,
  },
  btnTitle: {
    fontSize: 18,
    letterSpacing: 2,
    color: '#000',
  }
});
