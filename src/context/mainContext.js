import React, { createContext } from "react";

export const MainContext = createContext();

export default function AuthProvider({children}){

    // Dados

    let data = {
        total: 0,
        comidas: {
            carneBovina: {
                fraldinha: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                contraFile: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                maminha: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                }
            },
            carneSuina: {
                picanha: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                linguica: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                paleta: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                }
            },
            frango: {
                coxa: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                coracao: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                asa: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                }
            },
            bebidas: {
                refrigerante: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                suco: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                agua: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                chaGelado: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                cerveja: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                }
            },
            acompanhamentos: {
                paoDeAlho: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                queijo: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                farofa: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                pao: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                arroz: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                },
                maionese: {
                    quantidade: 0,
                    preco: 0,
                    precoUnidade: 0
                }
            }
        },
        extras: {
            sal: {
                quantidade: 0,
                preco: 0,
                precoUnidade: 0
            },
            carvao: {
                quantidade: 0,
                preco: 0,
                precoUnidade: 0
            },
            descartaveis: {
                quantidade: 0,
                preco: 0,
                precoUnidade: 4
            },
            fosforoAcendedor: {
                preco: 0,
                precoUnidade: 10
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

    // Funções

    const contaPessoas = () => {
        data.pessoas.total = data.pessoas.homens + data.pessoas.mulheres + data.pessoas.criancas;
        data.total = (data.pessoas.homens * 0.6) + (data.pessoas.mulheres * 0.4) + (data.pessoas.criancas * 0.25);
    }
    
    return(
        <MainContext.Provider value={{data, contaPessoas}}>
            {children}
        </MainContext.Provider>
    );
}