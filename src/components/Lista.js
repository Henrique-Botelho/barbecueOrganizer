import React, { useContext } from "react";
import { View, Text } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Lista(props) {
    const {data} = useContext(MainContext);

    let item = data.comidas[props.tipo];
    return(
        <View>
            {item[0].status ? <Text>{item[0].nome} --- {item[0].quantidade} kg --- R${item[0].preco} --- R${item[0].precoTotal}</Text>: null}
            {item[1].status ? <Text>{item[1].nome} --- {item[1].quantidade} kg --- R${item[1].preco} --- R${item[1].precoTotal}</Text>: null}
            {item[2].status ? <Text>{item[2].nome} --- {item[2].quantidade} kg --- R${item[2].preco} --- R${item[2].precoTotal}</Text>: null}
        </View>
    );
}
