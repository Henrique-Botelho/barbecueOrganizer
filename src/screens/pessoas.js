import React from "react";
import {View, Text, StyleSheet} from "react-native";
import SwitchButton from "../components/switch";

export default function Pessoas() {
    return(
        <View>
            <Text>Primeira tela</Text>
            <View style={styles.opcoes}>
                <Text>Há pessoas vegetarianas?</Text><SwitchButton />
                <Text>Há pessoas veganas?</Text><SwitchButton />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});