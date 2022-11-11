import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Receitas(props) {
  return (
    <View style={styles.view}>
      <ImageBackground
        blurRadius={3}
        resizeMode="cover"
        opacity={0.48}
        source={require("../../assets/fundo.png")}
        style={styles.image}
      ></ImageBackground>
      <View style={styles.receita}>
        <Text>
          1° Salgue a carne apenas no momento em que for levar a brasa 2°
          Coloque em uma grelha bem quente e asse por aproximadamente 5 minutos
          de cada lado ou até que a fraldinha esteja dourada 3° Retire da brasa
          e deixe descansar por aproximadamente 5 minutos antes de cortar.
        </Text>
      </View>
      <View style={styles.receita}>
        <Text>
          1 °Tempere com o limão e o sal grosso 2° Deixe marinar por
          algunsminutos, espete a carne com um espeto duplo para churrasco e
          leve à churrasqueira em fogo brando 3° Quando a carne estiver dourada,
          retireda churrasqueira, fatie a parte dourada (com a carne ainda no
          espeto) 4° A carne que ainda está no espeto (que está malpassada) deve
          ser salgada novamente e levada à churrasqueira para grelhar.
        </Text>
      </View>
      <View style={styles.receita}>
        <Text>
          1 °Polvilhe um pouco de sal grosso em todos os lados da carne 2°
          Coloque para churrasquear na grelha bem quente e em braseiro forte 3°
          Quando a carne se soltar da grelha, vire. Assim que atingir o ponto
          desejado, sirva cortada em fatias finas 4° Acompanhe com farinha de
          mandioca crua, batata estufada e salada.
        </Text>
      </View>
      <View style={styles.receita}>
        <Text>
          1 °Deixe a picanha suína inteira, passe a paprica picante, o ají
          Chileno e o sal grosso por toda a carne de maneira uniforme 2° Coloque
          a carneem um saco plastico junte todos os outros ingredientes 3° Deixe
          descansar por 30 minutos. Coloque em uma grelha e leve pra
          churrasqueira em fogo médio por aproximadamente 50 minutos virando a
          grelha a cada 10 minutos 4° Retire do fogo, pincele o molho barbecue e
          volte ao fogo por mais 10 minutos.
        </Text>
      </View>
      <View style={styles.receita}>
        <Text>
          1° Espete a linguiça em espetos de churrasco e leve à churrasqueira
          por 40 minutos, virando algumas vezes ou até assar e dourar 2° Retire,
          corte em rodelas e sirva com farofa e limão.
        </Text>
      </View>
      <View style={styles.receita}>
        <Text>
          1° Num recipiente tempere a paleta com o azeite, o sal, o limão, o
          alecrim e a pimenta vermelha 2° Deixe marinar por aproximadamente 1
          hora 3° Acomode a paleta numa grelha sardinheira e leve à
          churrasqueira em fogo brando 4° Quando estiver dourada, retire da
          churrasqueira e acomode em um prato. Prato pronto é só servir e bom
          apetite 5° O tempo de preparo depende do braseiro utilizado 6° Vale
          lembrar que o fogo muito forte vai dourar por fora e não vai assar por
          dentro.
        </Text>
      </View>
      <View style={styles.receita}>
        <Text>
          1° Tempere as coxas de frango com sal e limão e pimenta como desejar,
          deixe penetrar os ingredientes por 2 horas 2° Coloque na churrasqueira
          sempre olhando e quando estiver dourando um pouco adicione gergelim e
          manteiga por cima para fixar.
        </Text>
      </View>
      <View style={styles.receita}>
        <Text>
          1° Em uma bacia, coloque os corações de frango, adicione o óleo e o
          alho. 2° Salgue a gosto com o sal grosso e mexa bem. Espete os
          corações em espeto de bambu ou no de sua preferência. 3° Asse-os em
          brasa sem fogo alto, por aproximadamente 30 minutos.
        </Text>
      </View>
      <View style={styles.receita}>
        <Text>
          1° Coloque as asinhas em um recipiente 
          2° Tempere-as com o sal e o limão.
          3° Deixe marinar por 20 minutos. Utilizando um espeto duplo para
          churrasco, espete as asinhas (coloque elas sempre do mesmo lado) e
          leve à churrasqueira em fogo brando 
          4° Altura de 40 centímetros por aproximadamente 30 minutos 
          5° Quando as asinhas estiverem douradas, retire da churrasqueira 
          6° Vale lembrar que o fogo muito forte vai dourar por fora e não vai assar por dentro.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  image: {
    backgroundColor: "#000",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-evenly",
  },
  receita: {},
});
