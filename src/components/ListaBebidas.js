import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MainContext } from "../context/mainContext";

export default function ListaBebidas() {
    const {data} = useContext(MainContext);

    let item = data.comidas["Bebidas"];

    return(
        <View>
            <View style={styles.views}><Text style={styles.itensHead}>Item</Text>     <Text style={styles.itensHead}>Quantidade (L)</Text>     <Text style={styles.itensHead}>Preço do Litro</Text>     <Text style={styles.itensHead}>Preço Total</Text></View>
            {item[0].status ? <View style={styles.views}><Text style={styles.itens}>{item[0].nome}</Text>     <Text style={styles.itens}>{item[0].quantidade}</Text>     <Text style={styles.itens}>R${item[0].preco}</Text>     <Text style={styles.itens}>R${item[0].precoTotal}</Text></View>: null}
            {item[1].status ? <View style={styles.views}><Text style={styles.itens}>{item[1].nome}</Text>     <Text style={styles.itens}>{item[1].quantidade}</Text>     <Text style={styles.itens}>R${item[1].preco}</Text>     <Text style={styles.itens}>R${item[1].precoTotal}</Text></View>: null}
            {item[2].status ? <View style={styles.views}><Text style={styles.itens}>{item[2].nome}</Text>     <Text style={styles.itens}>{item[2].quantidade}</Text>     <Text style={styles.itens}>R${item[2].preco}</Text>     <Text style={styles.itens}>R${item[2].precoTotal}</Text></View>: null}
            {item[3].status ? <View style={styles.views}><Text style={styles.itens}>{item[3].nome}</Text>     <Text style={styles.itens}>{item[3].quantidade}</Text>     <Text style={styles.itens}>R${item[3].preco}</Text>     <Text style={styles.itens}>R${item[3].precoTotal}</Text></View>: null}
            {item[4].status ? <View style={styles.views}><Text style={styles.itens}>{item[4].nome}</Text>     <Text style={styles.itens}>{item[4].quantidade}</Text>     <Text style={styles.itens}>R${item[4].preco}</Text>     <Text style={styles.itens}>R${item[4].precoTotal}</Text></View>: null}

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