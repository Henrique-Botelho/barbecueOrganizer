import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MainContext } from "../context/mainContext";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBox from "@react-native-community/checkbox";

export default function Item(props) {
    const {setItem, data} = useContext(MainContext);
    let estado = data.comidas[props.class][props.position].status;
    const [checkBoxState, setCheckBoxState] = useState(estado);
    
    setItem(props.class, props.position, checkBoxState);

    return (
        <TouchableOpacity onPress={() => {setCheckBoxState(!checkBoxState); console.log(checkBoxState)}}>
            <BouncyCheckbox disableBuiltInState={true} isChecked={checkBoxState} onPress={() => {setCheckBoxState(!checkBoxState)}} />
            <Text>{props.name}</Text>
        </TouchableOpacity>
    );
}