import React from "react";
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";

export default function Home(props) {
    return(
        <View>
            <ImageBackground opacity={0.48} source={require('../../assets/fundo.png')} style={styles.image}>
                <TouchableOpacity style={styles.btn} onPress={() => {props.navigation.navigate("pessoas")}}>
                    <Text style={styles.text}>Organizar um churrasco</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
      height: "100%",
      backgroundColor: "#000",
      alignItems: 'center',
    },
    btn:{
        backgroundColor: "#FFCE51",
        width: "70%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: "80%",
        paddingVertical: 30
    },
    text:{
        fontSize: 20
    }
  })