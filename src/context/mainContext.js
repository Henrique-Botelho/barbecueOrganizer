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

    const adicionaItem = (tipoAssado) => {
        if (tipoAssado == "Carne Bovina" || tipoAssado == "Carne Suina" || tipoAssado == "Frango") {
            data.comidas.totalItensAssados += 1
        }
    }
    
    const retiraItem = (tipoAssado) => {
        if (tipoAssado == "Carne Bovina" || tipoAssado == "Carne Suina" || tipoAssado == "Frango") {
            data.comidas.totalItensAssados -= 1
        }
    }

    const calculaChurrasco = () => {
        // Primeiro calculo a quantidade de carne total necessária de acordo com a qauuntidade de pessoas
        data.comidas.totalCarne = ((data.pessoas["Homens"] * 60) + (data.pessoas["Mulheres"] * 40) + (data.pessoas["Crianças"] * 25)) / 100;

        /* Depois, pego o total de quilos de carne necessária e divido pela 
        quantidade de intens de assados para saber quantos de cada carne */

        let quilosPorItem = (data.comidas.totalCarne / data.comidas.totalItensAssados).toFixed(2);

        data.comidas["Carne Bovina"].forEach(element => {
            if (element.status == true){
                element.quantidade = quilosPorItem;
                element.precoTotal = (quilosPorItem * element.preco).toFixed(2);
            }
        });
        data.comidas["Carne Suina"].forEach(element =>{
            if (element.status == true) {
                element.quantidade = quilosPorItem;
                element.precoTotal = (quilosPorItem * element.preco).toFixed(2);
            }
        })
        data.comidas["Frango"].forEach(element => {
            if (element.status == true) {
                element.quantidade = quilosPorItem;
                element.precoTotal = (quilosPorItem * element.preco).toFixed(2);
            }
        })
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