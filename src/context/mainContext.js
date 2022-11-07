import React, { createContext } from "react";
import data from "../data/data";

export const MainContext = createContext();

export default function AuthProvider({children}){

    const adicionaPessoas = (pessoa, quantidade) => {
        if (pessoa == "Homens") {
            data.pessoas[pessoa] = quantidade
        } else if (pessoa == "Mulheres") {
            data.pessoas[pessoa] = quantidade
        } else if (pessoa == "Crianças") {
            data.pessoas[pessoa] = quantidade
        }
    }

    const somaPessoas = () => {
        data.pessoas.total = data.pessoas["Homens"] + data.pessoas["Mulheres"] + data.pessoas["Crianças"];
    }

    const setItem = (classe, item, estado) => {
        data.comidas[classe][item].status = estado;
    }


    const setInfo = (nome, tel, endereco, custo) => {
        data.info.evento.nomeOrganizador = nome;
        data.info.evento.telefone = tel;
        data.info.local.endereco = endereco;
        data.info.local.custo = custo
    }

    const adicionaItem = (tipo, item) => {
        if (tipo == "Carne Bovina" || tipo == "Carne Suina" || tipo == "Frango") {
            data.comidas.totalItensAssados += 1
        } else if (tipo == "Bebidas") {
            data.comidas.totalItensBebidas += 1
            if (item != "Cerveja") {
                data.comidas.totalItensBebidasCriancas += 1
            }
        }
    }
    
    const retiraItem = (tipo, item) => {
        if (tipo == "Carne Bovina" || tipo == "Carne Suina" || tipo == "Frango") {
            data.comidas.totalItensAssados -= 1
        } else if (tipo == "Bebidas") {
            data.comidas.totalItensBebidas -= 1
            if (item != "Cerveja") {
                data.comidas.totalItensBebidasCriancas -= 1
            }
        }
    }

    const calculaChurrasco = () => {
        // Primeiro calculo a quantidade de carne total necessária de acordo com a qauuntidade de pessoas
        data.comidas.totalCarne = ((data.pessoas["Homens"] * 60) + (data.pessoas["Mulheres"] * 40) + (data.pessoas["Crianças"] * 25)) / 100;

        /* Depois, pego o total de quilos de carne necessária e divido pela 
        quantidade de intens de assados para saber quantos de cada carne. */

        let quilosPorItem = data.comidas.totalCarne / data.comidas.totalItensAssados;

        /* Para cada tipo de carne, eu varro o vetor a procura dos itens que estão true
        e defino a quantidade por item mais o preço total de cada um. */

        data.comidas["Carne Bovina"].forEach(element => {
            if (element.status == true){
                element.quantidade = (quilosPorItem).toFixed(2);
                element.precoTotal = (quilosPorItem * element.preco).toFixed(2);
            }
        });
        data.comidas["Carne Suina"].forEach(element =>{
            if (element.status == true) {
                element.quantidade = (quilosPorItem).toFixed(2);
                element.precoTotal = (quilosPorItem * element.preco).toFixed(2);
            }
        })
        data.comidas["Frango"].forEach(element => {
            if (element.status == true) {
                element.quantidade = (quilosPorItem).toFixed(2);
                element.precoTotal = (quilosPorItem * element.preco).toFixed(2);
            }
        })
        
        // Repito o processo com as bebidas

        data.comidas.totalLitrosAdultos = ((data.pessoas["Homens"] * 20) + (data.pessoas["Mulheres"] * 15)) / 10;
        data.comidas.totalLitrosCriancas = data.pessoas["Crianças"]; // Não multiplico por nada porque considero que cada criança toma 1 litro em média de liqúido.

        console.log(typeof data.comidas.totalLitrosCriancas)
        console.log(data.comidas.totalLitrosCriancas)
        /* Defino a quantidade de litros para cada item */

        console.log(typeof data.comidas.totalItensBebidasCriancas)
        console.log( data.comidas.totalItensBebidasCriancas)

        let litrosPorItemCriancas = data.comidas.totalLitrosCriancas / data.comidas.totalItensBebidasCriancas;
        let litrosPorItemAdultos = data.comidas.totalLitrosAdultos / data.comidas.totalItensBebidas;

        console.log(typeof litrosPorItemCriancas)

        data.comidas["Bebidas"].forEach(element => {
            if (element.status == true) {
                element.quantidade = (litrosPorItemAdultos + litrosPorItemCriancas).toFixed(2);
                element.precoTotal = ((litrosPorItemAdultos + litrosPorItemCriancas) * element.preco).toFixed(2);
                if (element.nome == "Cerveja") {
                    element.quantidade = (litrosPorItemAdultos).toFixed(2);
                    element.precoTotal = (litrosPorItemAdultos * element.preco).toFixed(2);
                }
            }
        });
    }

    const response = {
        data,
        adicionaPessoas, 
        somaPessoas,
        setItem,
        setInfo,
        adicionaItem,
        retiraItem,
        calculaChurrasco
    };
    
    return(
        <MainContext.Provider value={response}>
            {children}
        </MainContext.Provider>
    );
}