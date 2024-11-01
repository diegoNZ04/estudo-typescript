// NULL (nulo) - referente a um tipo de dado
let znome: null;
znome = null;
console.log(znome); // retorna null

// UNDEFINED (indefinido) - referente ao valor da variável de tipo indefinido
let znome2;
console.log(znome2); //retorna undefined

// UNKNOWN (desconhecid) - pode receber qualquer valor mas permanece como desconhecido, recebendo apenas any
let znome3: unknown = 10;
let znum: any = znome3;
console.log(znome3);
