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
            totalCarne: 0,
            "Carne Bovina": [
                {
                    nome: "Fraldinha",
                    status: false,
                    preco: 40.00,
                    unidade: "kg",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Contra Filé", 
                    status: false,
                    preco: 45.00,
                    unidade: "kg",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Maminha",
                    status: false,
                    preco: 46.00,
                    unidade: "kg",
                    quantidade: 0,
                    precoTotal: 0
                }
            ],
            "Carne Suina" : [
                {
                    nome: "Picanha",
                    status: false,
                    preco: 46.00,
                    unidade: "kg",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Linguiça",
                    status: false,
                    preco: 28.00,
                    unidade: "kg",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Paleta",
                    status: false,
                    preco: 30.00,
                    unidade: "kg",
                    quantidade: 0,
                    precoTotal: 0
                }
            ],
            "Frango": [
                {
                    nome: "Coxa",
                    status: false,
                    preco: 15.00,
                    unidade: "kg",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Coração",
                    status: false,
                    preco: 25.00,
                    unidade: "kg",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Asa",
                    status: false,
                    preco: 20.00,
                    unidade: "kg",
                    quantidade: 0,
                    precoTotal: 0
                }
            ],
            "Bebidas": [
                {
                    nome: "Refrigerante",
                    status: false,
                    preco: 10.00,
                    unidade: "Garrafa de 2L",
                    litros: 0,
                    precoTotal: 0
                },
                {
                    nome: "Suco",
                    status: false,
                    preco: 7.00,
                    unidade: "Garrafa de 1L",
                    litros: 0,
                    precoTotal: 0
                },
                {
                    nome: "Chá Gelado",
                    status: false,
                    preco: 6.00,
                    unidade: "Garrafa de 1,5L",
                    litros: 0,
                    precoTotal: 0
                },
                {
                    nome: "Água",
                    status: false,
                    preco: 3.00,
                    unidade: "Garrafa de 1,5L",
                    litros: 0,
                    precoTotal: 0
                },
                {
                    nome: "Cerveja",
                    status: false,
                    preco: 4.00,
                    unidade: "Lata",
                    litros: 1,
                    precoTotal: 0
                },
            ],
            "Acompanhamentos": [
                {
                    nome: "Pão de Alho",
                    status: false,
                    preco: 10.00,
                    unidade: "Pacote 300g",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Queijo",
                    status: false,
                    preco: 30.00,
                    unidade: "Pacote 280g",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Farofa",
                    status: false,
                    preco: 8.00,
                    unidade: "Pacote 500g",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Pão",
                    status: false,
                    preco: 5.00,
                    unidade: "Pacote 120g",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Maionese",
                    status: false,
                    preco: 10.00,
                    unidade: "Pote ou Porção",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Arroz",
                    status: false,
                    preco: 4.00,
                    unidade: "Panela - 3 xícaras",
                    quantidade: 0,
                    precoTotal: 0
                },
            ],
            "Sem Falta": [
                {
                    nome: "Carvão",
                    preco: 25.00,
                    unidade: "Pacote 2kg",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Acendedor/Fósforo",
                    preco: 10.00,
                    unidade: "Pacote",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Sal",
                    preco: 5.00,
                    unidade: "kg",
                    quantidade: 0,
                    precoTotal: 0
                },
                {
                    nome: "Descartáveis",
                    preco: 20.00,
                    unidade: "Kit com 10 unidades",
                    quantidade: 0,
                    precoTotal: 0
                }
            ]
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

    const setItem = (classe, item, estado) => {
        data.comidas[classe][item].status = estado;
    }



    const response = {
        data, 
        adicionaPessoas, 
        somaPessoas,
        setItem
    };
    
    return(
        <MainContext.Provider value={response}>
            {children}
        </MainContext.Provider>
    );
}