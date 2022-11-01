import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MainContext } from "../context/mainContext";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Item(props) {
    const {setItem, data} = useContext(MainContext);
    const [checkBoxState, setCheckBoxState] = useState(data.comidas[props.class][props.position].status);
    
    setItem(props.class, props.position, checkBoxState);

    console.log(`${props.name}:`, data.comidas[props.class][props.position].status)

    return (
        <TouchableOpacity onPress={() => {setCheckBoxState(!checkBoxState)}}>
            <BouncyCheckbox disableBuiltInState={true} isChecked={checkBoxState} onPress={() => {setCheckBoxState(!checkBoxState)}} />
            <Text>{props.name}</Text>
            
        </TouchableOpacity>
    );
}