import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Lista() {
    const {data} = useContext(MainContext);

    let item = data.comidas["Carne Bovina"];
    let item1 = data.comidas["Carne Suina"];
    let item2 = data.comidas["Frango"];

    return(
        <View>
            <View style={styles.views}><Text style={styles.itensHead}>Item</Text>     <Text style={styles.itensHead}>Quantidade (kg)</Text>     <Text style={styles.itensHead}>Preço do Quilo</Text>     <Text style={styles.itensHead}>Preço Total</Text></View>
            {item[0].status ? <View style={styles.views}><Text style={styles.itens}>{item[0].nome}</Text>     <Text style={styles.itens}>{item[0].quantidade}</Text>     <Text style={styles.itens}>R${item[0].preco}</Text>     <Text style={styles.itens}>R${item[0].precoTotal}</Text></View>: null}
            {item[1].status ? <View style={styles.views}><Text style={styles.itens}>{item[1].nome}</Text>     <Text style={styles.itens}>{item[1].quantidade}</Text>     <Text style={styles.itens}>R${item[1].preco}</Text>     <Text style={styles.itens}>R${item[1].precoTotal}</Text></View>: null}
            {item[2].status ? <View style={styles.views}><Text style={styles.itens}>{item[2].nome}</Text>     <Text style={styles.itens}>{item[2].quantidade}</Text>     <Text style={styles.itens}>R${item[2].preco}</Text>     <Text style={styles.itens}>R${item[2].precoTotal}</Text></View>: null}

            {item1[0].status ? <View style={styles.views}><Text style={styles.itens}>{item1[0].nome}</Text>     <Text style={styles.itens}>{item1[0].quantidade}</Text>     <Text style={styles.itens}>R${item1[0].preco}</Text>     <Text style={styles.itens}>R${item1[0].precoTotal}</Text></View>: null}
            {item1[1].status ? <View style={styles.views}><Text style={styles.itens}>{item1[1].nome}</Text>     <Text style={styles.itens}>{item1[1].quantidade}</Text>     <Text style={styles.itens}>R${item1[1].preco}</Text>     <Text style={styles.itens}>R${item1[1].precoTotal}</Text></View>: null}
            {item1[2].status ? <View style={styles.views}><Text style={styles.itens}>{item1[2].nome}</Text>     <Text style={styles.itens}>{item1[2].quantidade}</Text>     <Text style={styles.itens}>R${item1[2].preco}</Text>     <Text style={styles.itens}>R${item1[2].precoTotal}</Text></View>: null}

            {item2[0].status ? <View style={styles.views}><Text style={styles.itens}>{item2[0].nome}</Text>     <Text style={styles.itens}>{item2[0].quantidade}</Text>     <Text style={styles.itens}>R${item2[0].preco}</Text>     <Text style={styles.itens}>R${item2[0].precoTotal}</Text></View>: null}
            {item2[1].status ? <View style={styles.views}><Text style={styles.itens}>{item2[1].nome}</Text>     <Text style={styles.itens}>{item2[1].quantidade}</Text>     <Text style={styles.itens}>R${item2[1].preco}</Text>     <Text style={styles.itens}>R${item2[1].precoTotal}</Text></View>: null}
            {item2[2].status ? <View style={styles.views}><Text style={styles.itens}>{item2[2].nome}</Text>     <Text style={styles.itens}>{item2[2].quantidade}</Text>     <Text style={styles.itens}>R${item2[2].preco}</Text>     <Text style={styles.itens}>R${item2[2].precoTotal}</Text></View>: null}
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