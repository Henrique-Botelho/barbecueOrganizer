import React from "react";
import {useState} from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ModalReceita(props){
    const id = props.id;
    const ativo = props.ativo;

    const [visible, setVisible] = useState(true);

    return (
        <View>
            <Modal visible={ativo && visible}>
                <Text> Titulo da receita </Text>
                <Text>
                    1° Salgue a carne apenas no momento em que for levar a brasa 2°
                    Coloque em uma grelha bem quente e asse por aproximadamente 5 minutos
                    de cada lado ou até que a fraldinha esteja dourada 3° Retire da brasa
                    e deixe descansar por aproximadamente 5 minutos antes de cortar.
                </Text>
                <TouchableOpacity onPress={setVisible(false)}>
                    <Text>Fechar</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};