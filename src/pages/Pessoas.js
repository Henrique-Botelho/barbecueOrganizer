import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MainContext } from "../context/mainContext";

export default function Pessoas(props) {
    const {man, setMan, woman, setWoman, child, setChild, contaPessoas} = useContext(MainContext);
    const [control ,setControl] = useState(false);

    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <Text style={styles.textTitulo}>Quantas pessoas?</Text>
                <View>
                    <TouchableOpacity disabled={control} onPress={() => {setMan(man - 1); if (man == 1) {setControl(true)}}}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{man}</Text>
                    <TouchableOpacity
                        onPress={() => {setMan(man + 1); setControl(false)}}>
                        <Text>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity disabled={control} onPress={() => {setWoman(woman - 1); if (man == 1) {setControl(true)}}}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{woman}</Text>
                    <TouchableOpacity
                        onPress={() => {setWoman(woman + 1); setControl(false)}}>
                        <Text>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity disabled={control} onPress={() => {setChild(child - 1); if (man == 1) {setControl(true)}}}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{child}</Text>
                    <TouchableOpacity
                        onPress={() => {setChild(child + 1); setControl(false)}}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity
                    onPress={() => {contaPessoas(); props.navigation.navigate("carnes")}}>
                    <Text>Prosseguir</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    image:{
      backgroundColor: "#000",
      alignItems: 'center',
      flex: 1,
      justifyContent: "space-evenly"
    },
    textTitulo: {
        backgroundColor: '#FFCE51',
        color: '#b43434',
        borderRadius: 10,
        padding: 10,
        fontSize: 25,
    },
    abrir: {
        flexDirection: "row"
    }
  })