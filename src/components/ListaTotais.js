import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MainContext } from "../context/mainContext";

export default function ListaTotais(props) {
    const {data} = useContext(MainContext);

    return(
        <View>
            <View style={styles.views}>
                <Text style={styles.itensHead}>Total de Carne (kg)</Text>
                <Text style={styles.itensHead}>Total de Bebidas (L)</Text>
                <Text style={styles.itensHead}>Custo por Pessoa</Text>
                <Text style={styles.itensHead}>Custo do Local</Text>
            </View>
            <View style={styles.views}>
                <Text style={styles.resultados}>{data.comidas.totalCarne}</Text>
                <Text style={styles.resultados}>{data.comidas.totalLitros} L</Text>
                <Text style={styles.resultados}>Custo total: R$ {data.custoTotal}</Text>
                <Text style={styles.resultados}>Custo total: R$ {data.custoTotal}</Text>
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