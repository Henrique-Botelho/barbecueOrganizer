import React, { createContext, useEffect, useState } from "react";
import data from "../data/data.json";

export const MainContext = createContext();

export default function AuthProvider({children}){

    // const [dados, setDados] = useState();

    // const getDados = async () => {
    //     const response = await data;
    //     setDados(response);
    // }
    // getDados();

    const [dados, setDados] = useState();

    useEffect(() => {
        const getData = () => {
            return new Promise((resolve, reject) => {
                resolve(data)
                reject("Não foi possível acessar os dados.")
            }) 
        }

        getData()
            .then(value => {setDados(JSON.stringify(value))})
            .catch(error => console.log(error));

    }, []); 
    
    return(
        <MainContext.Provider value={{dados}}>
            {children}
        </MainContext.Provider>
    );

}