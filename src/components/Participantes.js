import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Directions } from "react-native-gesture-handler";
import { MainContext } from "../context/mainContext";

export default function Participantes(props) {
  const { data, adicionaPessoas, somaPessoas } = useContext(MainContext);
  const [quantidade, setQuantidade] = useState(data.pessoas[props.pessoa]);

  adicionaPessoas(props.pessoa, quantidade);
  somaPessoas();

  return (
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
          <Text style={styles.botoes}>-</Text>
        </TouchableOpacity>
          <Text style={styles.numero}>{quantidade}</Text>
        <TouchableOpacity
          onPress={() => {
            setQuantidade(quantidade + 1);
          }}
        >
          <Text style={styles.botoes}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botoes: {
    fontSize: 25,
  },
  numero: {
    fontSize: 22,
  },
  quantidade: {
    flexDirection: "row",
    letterSpacing: 20,
    justifyContent: "center",
    backgroundColor: "#FFCE51",
    marginTop: 5,
    padding: 5,
    width: 120,
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 25,
    borderWidth: 0.1,
    borderColor: "black",
    borderRadius: 5,
  },
  textgenero: {
    letterSpacing: 2,
    fontSize: 17,
  },
  genero: {
    justifyContent: "center",
    backgroundColor: "#FFCE51",
    borderRadius: 5,
    padding: 5,
    margim: 80,
    textAlign: "center",
    width: 200,
  },
});
