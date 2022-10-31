import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MainContext } from "../context/mainContext";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Item(props) {
    const [checkBoxState, setCheckBoxState] = useState(false);

    return (
        <TouchableOpacity onPress={() => {setCheckBoxState(!checkBoxState); console.log(checkBoxState)}}>
            <BouncyCheckbox isChecked={checkBoxState} onPress={() => {setCheckBoxState(!checkBoxState)}} />
            <Text>Olá Mundo</Text>
        </TouchableOpacity>
    );
}