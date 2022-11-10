import React, { useEffect } from "react";
import Routes from "./src/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";

AsyncStorage.setItem("Chave 1", "Olá mundo");

export default function App(){
  return <Routes />;
}