import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, FlatList, TextInput} from "react-native-web";

export default function Carnes(){
    return(
        <View style={styles.view}>
            <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                <View>
                    <Text style={styles.textEstimativa}>Estimativa de Carne</Text>
                    <Text style={styles.textTitulo}>Quantas pessoas?</Text>
                </View>
                {/* <View>
                    <ScrollView>
                        <FlatList>
                        </FlatList>
                    </ScrollView> 
                </View>
                <View>
                    <TouchableOpacity>
                        Prosseguir
                    </TouchableOpacity>
                </View> */}
                
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
    textEstimativa: {
        backgroundColor: '#FFCE51',
        color: '#b43434',
    }
})