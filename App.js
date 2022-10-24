import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/home";
import Pessoas from "./src/screens/pessoas";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen 
          name="home" 
          component={Home} 
          options={{
            title: 'Barbecue Organizer',
            headerStyle: {
              backgroundColor: '#b43434',
            },
            headerTitleAlign: "center",
            headerTintColor: "#FFF"
          }} />
        <Stack.Screen 
          name="pessoas"
          component={Pessoas}
          options={{
            title: 'Quantidade de Pessoas',
            headerStyle: {
              backgroundColor: '#b43434',
            },
            headerTitleAlign: "center",
            headerTintColor: "#FFF"
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}