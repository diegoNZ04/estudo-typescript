let numeros: number[] = [20, 30, 40];
// array tradicional

numeros.push(50);
// add valor no final do array

numeros.unshift(10);
// add valor no inicio do array

numeros.pop();
// remove ultimo valor do array

numeros.shift();
// remove o primeiro valor do array

console.log(numeros);

let numeros_ro: ReadonlyArray<number> = [100, 200, 300];
// array que não pode ser manipulado
