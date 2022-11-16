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
                    <FlatList
                        data={dados}
                        renderItem={({item}) => {
                            return(
                                <View>
                                    <TouchableOpacity
                                        style={styles.btn}
                                        onPress={() => {
                                            getNewData(item)
                                                .then(value => setNewData(value))
                                                .then(() => props.navigation.navigate("churras"))
                                                .catch(error => console.log(error));
                                        }}
                                        activeOpacity={0.7}>
                                            <Text>{item}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />
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
            <View style={styles.view2}>
                <ImageBackground blurRadius={3} resizeMode="cover" opacity={0.48} source={require('../../assets/fundo.png')}  style={styles.image}>
                    <Text styles={styles.alert}>Nenhum churrasco encontrado</Text>
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
        flex: 1
    },
    view2: {
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
    nenhum:{
        alignSelf:"center",
        textAlign:"center",
        backgroundColor: '#FFCE51',
        color: '#b43434',
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        margin:15,
    },
    btn:{
        backgroundColor: "#FFCE51",
        borderRadius: 10,
        flexDirection: "row",
        alignSelf: "center",
        padding: 20,
        marginBottom: 20,
    },
    text:{
        // fontWeight:600,
        fontSize: 25,
        alignSelf: "center",
        height: 35,
        letterSpacing: 2,
    }
});