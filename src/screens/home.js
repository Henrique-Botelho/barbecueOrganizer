import React from "react";
import {View, Text, StyleSheet, ImageBackground} from "react-native";

export default function Home(props) {
    return(
        <View>
            <ImageBackground opacity={0.48} source={require('../../assets/fundo.png')} style={styles.image}>
                <Text>Olá mundo</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
      height: "100%",
      backgroundColor: "#000"
    }
  })