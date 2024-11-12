
const teste = (txt: string): void => {
    console.log(txt);
}

const fsoma = (n: number[]): number => {
    let s: number = 0;

    n.forEach((e) => {
        s += e;
    })

    return s;
}

teste("TypeScript");

let numer: number[] = [10, 20, 30, 40];
console.log(fsoma(numer));