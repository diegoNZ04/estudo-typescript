let dados = {
  nome: "Diego",
  idade: 20,
  status: "Ativo",
  ola: () => {
    console.log("Oi");
  },
  info: (p: string) => {
    console.log(p);
  },
};

console.log(dados);

console.log(typeof dados); // retorna tipo do dado
console.log(dados.nome);

dados.nome = "Diogo";

dados.ola();
dados.info("Gosta de academia");
dados.info(dados.nome);
