import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/mainContext";

import Home from "./src/screens/home";
import Pessoas from "./src/screens/pessoas";
import CalculaCarne from "./src/screens/CalculaCarnes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
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
            <Stack.Screen
            name="calculaCarnes"
            component={CalculaCarne}
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
            }}/>
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}