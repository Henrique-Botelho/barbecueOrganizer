import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Participantes(props) {
  const { data, adicionaPessoas, somaPessoas } = useContext(MainContext);
  const [quantidade, setQuantidade] = useState(data.pessoas[props.pessoa]);

  adicionaPessoas(props.pessoa, quantidade);
  somaPessoas();

  return (
    <View style={styles.container}>
      <View style={styles.genero}>
        <Text style={styles.textgenero}>{props.pessoa}</Text>
        <View style={styles.quantidade}>
          <TouchableOpacity
            onPress={() => {
              if (quantidade == 0) {
                setQuantidade(quantidade);
              } else {
                setQuantidade(quantidade - 1);
              }
            }}
          >
            <Image style={styles.btnMinus} source={require('../../assets/dash.png')} />
          </TouchableOpacity>
          <View style={styles.quntnum}>
            <Text style={styles.numero}>{quantidade}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setQuantidade(quantidade + 1);
            }}
          >
            <Image style={styles.btnPlus} source={require('../../assets/plus.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //caixa de seleção
  quantidade: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    width: 150,
    letterSpacing: 1,
  },
    //Botão
    btnMinus: {
      width: 40,
      height: 35,
      borderRadius: 5,
    },
      //caixa
      quntnum:{
        borderWidth: 0.1,
        borderColor: "black",
        borderRadius: 5,
      },
      //numero
      numero: {
        fontSize: 22,
        margin: 10,
      },
    btnPlus: {
      width: 40,
      height: 35,
      borderRadius: 5,
    },

  

  textgenero: {
    letterSpacing: 2,
    fontSize: 20,
    // fontWeight:600,
    textAlign: "center",
    width:120,
  },
  genero: {
    flex:1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    padding: 5,
    textAlign: "center",
    width:260,
  },
  container:{
    borderRadius: 5,
    backgroundColor: "#FFCE51",
    height:70,
    // width: "fit-content",
  }
});
