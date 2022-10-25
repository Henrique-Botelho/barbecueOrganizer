import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/home";
import Pessoas from "./src/screens/pessoas";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">

        {/* Tela Home */}
        <Stack.Screen 
          name="home" 
          component={Home} 
          options={{
            title: 'Barbecue Organizer',
            headerStyle: {
              backgroundColor: '#b43434',
            },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 25
            }
          }} />

        {/* Tela Seleção de Pessoas */}
        <Stack.Screen 
          name="pessoas"
          component={Pessoas}
          options={{
            title: 'Barbecue Organizer',
            headerStyle: {
              backgroundColor: '#b43434',
            },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 25
            }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}