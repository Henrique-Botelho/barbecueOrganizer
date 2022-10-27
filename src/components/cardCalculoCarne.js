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

function CardCarnes() {
  return (
    <View style={styles.card_carnes}>
      <View style={styles.header_bov}>  
          <Text>Carne bovina</Text>
          <Text>Receitas</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card_carnes: {
    width: 100,
    height: 100,
  },
  header_bov: {
    display: "flex",
    justifyContent: "space-between",
  },
});
export default CardCarnes;
