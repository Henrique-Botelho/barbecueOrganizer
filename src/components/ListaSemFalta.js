import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MainContext } from "../context/mainContext";

export default function ListaSemFalta() {
    const {data} = useContext(MainContext);

    return(
        <View>
            <View style={styles.views}>
                <Text style={styles.itensHead}>Item</Text>
                <Text style={styles.itensHead}>Quantidade</Text>
                <Text style={styles.itensHead}>Preço</Text>
                <Text style={styles.itensHead}>Total</Text>
            </View>
            <FlatList
                data={data.comidas["Sem Falta"]}
                renderItem={({item}) => {
                    return(
                        <View style={styles.views}>
                            <Text style={styles.itens}>{item.nome}</Text>
                            <Text style={styles.itens}>{item.quantidade}</Text>
                            <Text style={styles.itens}>R${item.preco}</Text>
                            <Text style={styles.itens}>R${item.precoTotal}</Text>
                        </View>
                    );
                }}
            />
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