import React, { createContext } from "react";

export const MainContext = createContext();

export default function AuthProvider({children}){

    let data = {
        total: 0,
        comidas: {
            "Carne Bovina": [
                {
                    nome: "Fraldinha",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Contra Filé",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Maminha",
                    quantidade: 0,
                    preco: 0
                }
            ],
            carneSuina: [
                {
                    nome: "Picanha",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Linguiça",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Paleta",
                    quantidade: 0,
                    preco: 0
                }
            ],
            frango: [
                {
                    nome: "Coxa",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Coração",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Asa",
                    quantidade: 0,
                    preco: 0
                }
            ],
            bebidas: [
                {
                    nome: "Refrigerante",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Suco",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Água",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Chá Gelado",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Cerveja",
                    quantidade: 0,
                    preco: 0
                }
            ],
            acompanhamentos: [
                {
                    nome: "Pão de Alho",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Queijo",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Farofa",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Pão",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Arroz",
                    quantidade: 0,
                    preco: 0
                },
                {
                    nome: "Maionese",
                    quantidade: 0,
                    preco: 0
                }
            ]
        },
        extras: [
            {
                nome: "Sal",
                quantidade: 0,
                preco: 0
            },
            {
                nome: "Carvão",
                quantidade: 0,
                preco: 0
            },
            {
                nome: "Descartáveis",
                quantidade: 0,
                preco: 0
            },
            {
                nome: "Fósforo/Acendedor",
                quantidade: 0,
                preco: 0
            }
        ],
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