import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Info(props) {
<<<<<<< HEAD
<<<<<<< HEAD
    const {data, setInfo} = useContext(MainContext);

    const [name, setName] = useState(data.info.evento.nomeOrganizador);
    const [tel, setTel] = useState(data.info.evento.telefone);
    const [ender, setEnder] = useState(data.info.local.endereco);
    const [CEP, setCEP] = useState(data.info.local.cep);
    const [price, setPrice] = useState(data.info.local.custo);

=======
>>>>>>> parent of c0cad2a (Update Fluxos)
=======
>>>>>>> parent of c0cad2a (Update Fluxos)
    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Informações</Text>
<<<<<<< HEAD
<<<<<<< HEAD
                <Text>Evento</Text>
                <View>
                    <Text>Nome do Organizador:{}</Text>
                    <Text>Telefone de Contato:{}</Text>
                    
                </View>
                <Text>Local</Text>
                <View>
                    <Text>Endereço: {}</Text>
                    <Text>CEP: {}</Text>
                    <Text>Custo: {}</Text>
                </View>
=======
>>>>>>> parent of c0cad2a (Update Fluxos)
=======
>>>>>>> parent of c0cad2a (Update Fluxos)
                                
                <TouchableOpacity
                    onPress={() => {}} style={styles.next}>
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
    next: {
        backgroundColor: "#FFCE51",
        padding: 10,
        borderRadius: 20
    },
    textNext: {
        fontSize: 20        
    }
})