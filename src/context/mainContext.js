import React, { createContext } from "react";

export const MainContext = createContext();

export default function AuthProvider({children}){

    let data = {
        pessoas: {
            total: 0,
            homens: 0,
            mulheres: 0,
            criancas: 0
        },
        comidas: {
            fraldinha: {
                status: false,
                precoQuilo: 39.90,
                quantidade: 0,
                precoTotal: 0
            },
            contraFile: {
                status: false,
                precoQuilo: 44.50,
                quantidade: 0,
                precoTotal: 0
            },
            maminha: {
                status: false,
                precoQuilo: 45.90,
                quantidade: 0,
                precoTotal: 0
            }
        }
    }

    const adicionaPessoas = (pessoa, quantidade) => {
        if (pessoa == "Homens") {
            data.pessoas.homens = quantidade
        } else if (pessoa == "Mulheres") {
            data.pessoas.mulheres = quantidade
        } else if (pessoa == "Crianças") {
            data.pessoas.criancas = quantidade
        }
    }


    const somaPessoas = () => {
        data.pessoas.total = data.pessoas.homens + data.pessoas.mulheres + data.pessoas.criancas;
    }


    const response = {
        data, 
        adicionaPessoas, 
        somaPessoas
    };
    
    return(
        <MainContext.Provider value={response}>
            {children}
        </MainContext.Provider>
    );
}