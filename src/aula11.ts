// Type Assertion - Afirmação de tipos

let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10;
nvalor = 10;
//svalor = nvalor.toString(); // number -> string

// nvalor = Number.parseInt(svalor); (string -> number)

//console.log(typeof svalor);
//console.log(svalor);

//nvalor = <number>(<unknown>svalor);

//nvalor = uvalor; //- não é capaz de realizar a afirmação do tipo
//nvalor = <number>uvalor; // capaz de afirmar o tipo number
//svalor = <string>uvalor;
//svalor += 10;

//console.log(typeof uvalor); // retorna number
//console.log(uvalor); // retorna 10

console.log(typeof nvalor);
console.log(nvalor);

//console.log(typeof svalor);
//console.log(svalor);
