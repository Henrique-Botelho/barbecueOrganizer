import React from "react";
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";

export default function Home(props) {
    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={() => {props.navigation.navigate("pessoas")}}
                    activeOpacity={0.7}>

                    <Text style={styles.text}>
                        Criar Churrasco
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
        flex: 1,
        justifyContent: "space-evenly"
    },
    meat:{
        width: 200,
        height: 200
    },
    btn:{
        backgroundColor: "#FFCE51",
        borderRadius: 10,
        flexDirection: "row",
        alignSelf: "center",
        padding: 20
    },
    text:{
        fontWeight:600,
        fontSize: 25,
        alignSelf: "center",
        height: 35,
        letterSpacing: 2,
    }
  })