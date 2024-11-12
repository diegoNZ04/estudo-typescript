"use strict";
const teste = (txt) => {
    console.log(txt);
};
const fsoma = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
teste("TypeScript");
let numer = [10, 20, 30, 40];
console.log(fsoma(numer));
