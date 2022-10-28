import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./context/mainContext";

import Home from "./pages/Home";
import Pessoas from "./pages/pessoas";
import Carnes from "./pages/CarneBovina";

const Stack = createStackNavigator();

export default function Routes() {
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