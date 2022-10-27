import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/mainContext";

import Home from "./src/screens/home";
import Pessoas from "./src/screens/pessoas";
import Carnes from "./src/screens/carnes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="home">

          <Stack.Screen name="home" component={Home} options={configHeader} />
          <Stack.Screen name="pessoas"component={Pessoas} options={configHeader} />
          <Stack.Screen name="carnes"component={Carnes} options={configHeader} />

        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

const configHeader = {
  title: 'Barbecue Organizer',
  headerStyle: {
    backgroundColor: '#b43434',
  },
  headerTitleAlign: "center",
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontSize: 25
  }
}