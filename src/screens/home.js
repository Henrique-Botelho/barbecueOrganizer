import React from "react";
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image} from "react-native";

export default function Home(props) {
    return(
        <View style={styles.view}>
            <ImageBackground opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <TouchableOpacity style={styles.btn} onPress={() => {props.navigation.navigate("pessoas")}}>
                    <Text style={styles.text}>
                        Criar churrasco
                    </Text>
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
      flex: 1
    },
    btn:{
        backgroundColor: "#FFCE51",
        borderRadius: 10,
        flexDirection: "row",
        alignSelf: "center",
        padding: 10,
        marginVertical: "70%"
    },
    text:{
        fontSize: 25,
        alignSelf: "center",
        height: 35
    }
  })