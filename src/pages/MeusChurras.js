import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator, FlatList, TouchableOpacity, Modal } from "react-native";
import { MainContext } from "../context/mainContext";

export default function MeusChurras(props) {
    const {data, excluirChurrascos, getNewData, setNewData} = useContext(MainContext);
    
    const [load, setLoad] = useState(false);
    const [dados, setDados] = useState();

    useEffect(() => {
        const getData = async () => {
            const response = await AsyncStorage.getAllKeys();
            setDados(response);
            setLoad(true);
        }
        getData();
    },[]);

    console.log(data);

    if (load == true && dados.length != 0) {
        return(
            <View style={styles.view}>
                <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                    <View style={styles.view3}>
                        <FlatList
                            data={dados}
                            renderItem={({item}) => {
                                return(
                                    <View style={styles.view2}>
                                        <TouchableOpacity
                                            style={styles.btn}
                                            onPress={() => {
                                                getNewData(item)
                                                    .then(value => setNewData(value))
                                                    .then(() => props.navigation.navigate("churras"))
                                                    .catch(error => console.log(error));
                                            }}
                                            activeOpacity={0.7}>
                                                <Text style={styles.textbtn}>{item}</Text>
                                        </TouchableOpacity>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            excluirChurrascos();
                            props.navigation.navigate("home");
                        }}
                        activeOpacity={0.7}>
                            <Text>Excluir Churrascos</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    } else if (load == true && dados.length == 0) {
        return(
            <View style={styles.view}>
                <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                    <View style={styles.view2}>
                        <Text styles={styles.neum}>Nenhum churrasco encontrado</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    } else {
        return(
            <View style={styles.view}>
                <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                    <ActivityIndicator />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    view2: {
        // flex: 1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: '#FFCE51',
    },
    view3: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    image:{
        backgroundColor: "#000",
        alignItems: 'center',
        flex: 1,
        justifyContent: "space-evenly"
    },
    // neum:{
    //     color: '#b43434',
    //     fontSize: 20,
    //     margin:15,
    //     alignSelf:"center",
    //     textAlign:"center",
    // },
    btn:{
        backgroundColor: "#FFCE51",
        borderRadius: 5,
        flexDirection: "row",
        marginBottom: 20,
        padding:5,
    },
    textbtn:{
        letterSpacing:2,
        color:'#b43434',
    },
    text:{
        fontSize: 25,
        alignSelf: "center",
        height: 35,
        letterSpacing: 2,
    }
});