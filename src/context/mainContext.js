import React, { createContext, useState } from "react";

export const MainContext = createContext();

export default function AuthProvider({children}){

    // Dados

    let data = {
        total: 0,
        comidas: {
            carneBovina: {
                fraldinha: {
                    quantidade: 0,
                    preco: 0
                },
                contraFile: {
                    quantidade: 0,
                    preco: 0
                },
                maminha: {
                    quantidade: 0,
                    preco: 0
                }
            },
            carneSuina: {
                picanha: {
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
            },
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
                paoDeAlho: {
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

    // Funções

    const contaPessoas = () => {
        data.pessoas.total = pessoas.homens + pessoas.mulheres + pessoas.criancas;
        data.total = (pessoas.homens * 0.6) + (pessoas.mulheres * 0.4) + (pessoas.criancas * 0.25);
    }

    // Response

    let response = {data, pessoas, contaPessoas}
    
    return(
        <MainContext.Provider value={response}>
            {children}
        </MainContext.Provider>
    );
}