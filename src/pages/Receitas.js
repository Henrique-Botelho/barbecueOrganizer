import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Modal, TouchableOpacity } from "react-native";

import ModalReceita from "../components/ModalReceita";

export default function Receitas(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [id, setID] = useState("");

  return (
    <View>
        <Text>Carne bovina</Text>
        <TouchableOpacity onPress={() => {
          setIsEnabled(!isEnabled);
          setID("1");       
        }}>
          <Text>Contra-filé</Text>
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
