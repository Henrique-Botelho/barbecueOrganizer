import React, { createContext } from "react";

export const MainContext = createContext();

export default function AuthProvider({children}){

    let data = {
        total: 0,
        comidas: {
            carneBovina: [
                {
                    nome: "fraldinha",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "contraFile",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "maminha",
                    quantidade: 0,
                    preco: 0
                }
            ],
            carneSuina: [
                {
                    nome: "picanha",
                    quantidade: 0,
                    preco: 0
                },
                linguica: {
                    quantidade: 0,
                    preco: 0
                },
                paleta: {
                    quantidade: 0,
                    preco: 0
                }
            ],
            frango: {
                coxa: {
                    quantidade: 0,
                    preco: 0
                },
                coracao: {
                    quantidade: 0,
                    preco: 0
                },
                asa: {
                    quantidade: 0,
                    preco: 0
                }
            },
            bebidas: {
                refrigerante: {
                    quantidade: 0,
                    preco: 0
                },
                suco: {
                    quantidade: 0,
                    preco: 0
                },
                agua: {
                    quantidade: 0,
                    preco: 0
                },
                chaGelado: {
                    quantidade: 0,
                    preco: 0
                },
                cerveja: {
                    quantidade: 0,
                    preco: 0
                }
            },
            acompanhamentos: {
                paoAlho: {
                    quantidade: 0,
                    preco: 0
                },
                queijo: {
                    quantidade: 0,
                    preco: 0
                },
                farofa: {
                    quantidade: 0,
                    preco: 0
                },
                pao: {
                    quantidade: 0,
                    preco: 0
                },
                arroz: {
                    quantidade: 0,
                    preco: 0
                },
                maionese: {
                    quantidade: 0,
                    preco: 0
                }
            }
        },
        extras: {
            sal: {
                quantidade: 0,
                preco: 0
            },
            carvao: {
                quantidade: 0,
                preco: 0
            },
            descartaveis: {
                quantidade: 0,
                preco: 0
            },
            fosforoAcendedor: {
                quantidade: 0,
                preco: 0
            }
        },
        pessoas:{
            total: 0,
            homens: 0,
            mulheres: 0,
            criancas: 0
        },
        evento: {
            organizador: {
                nome: "",
                telefone: "" 
            },
            local: {
                endereco: "",
                cep: "",
                custo: 0
            }
        } 
    }

    let pessoas = data.pessoas;

    return(
        <MainContext.Provider value={{data, pessoas}}>
            {children}
        </MainContext.Provider>
    );
}