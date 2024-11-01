"use strict";
let dados = {
    nome: "Diego",
    idade: 20,
    status: "Ativo",
    ola: () => {
        console.log("Oi");
    },
    info: (p) => {
        console.log(p);
    },
};
console.log(dados);
console.log(typeof dados);
console.log(dados.nome);
dados.nome = "Diogo";
dados.ola();
dados.info("Gosta de academia");
dados.info(dados.nome);
