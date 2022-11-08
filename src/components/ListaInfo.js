import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MainContext } from "../context/mainContext";

export default function ListaInfo(props) {
    const {data} = useContext(MainContext);

    return(
        <View>
            <View style={styles.views}>
                <Text style={styles.itensHead}>Organizador</Text>
                <Text style={styles.itensHead}>Telefone</Text>
                <Text style={styles.itensHead}>Local</Text>
                <Text style={styles.itensHead}>Custo do Local</Text>
            </View>
            <View style={styles.views}>
                <Text style={styles.itens}>{data.info.evento.organizador}</Text>
                <Text style={styles.itens}>{data.info.evento.telefone}</Text>
                <Text style={styles.itens}>{data.info.local.endereco}</Text>
                <Text style={styles.itens}>R${data.info.local.custo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    views: {
        flexDirection: "row",
    },
    itens: {
        width: 100,
        textAlign: 'center',
        color: "#fff"
    },
    itensHead: {
        width: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff"
    }
});