let coisas: [string, number, boolean] = ["corda", 10, true];
// let coisas: readonly [string, number, boolean] = ["corda", 10, true];

console.log(coisas);

coisas[2] = false;

console.log(coisas[0]);
console.log(coisas[2]);
// Acessando valores via posição

coisas.push("computador", 120, true);
console.log(coisas);

// console.log(coisas[3]);
