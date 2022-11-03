import React, { useContext } from "react";
import { View, Text } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Lista(props) {
    const {data} = useContext(MainContext);

    let item = data.comidas[props.tipo];

    item.forEach(element => {
        return(
            <View>
                {element.status ? <Text>Nome do Item: {element.nome}</Text> : null}
            </View>
        );
    })
}

