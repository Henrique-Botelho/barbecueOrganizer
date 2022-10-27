import React from "react";
import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native-web";
import CardCarnes from "../components/cardCalculoCarne";

function CalculaCarnes() {
  return (
    <View>
      <View>
        <CardCarnes>
        </CardCarnes>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  carne_bov: {
    color: "red",


  },
});

export default CalculaCarnes;
