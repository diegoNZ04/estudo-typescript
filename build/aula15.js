"use strict";
function fsomaRest(...n) {
    let s = 0;
    for (let en of n) {
        s += en;
    }
    return s;
}
console.log(fsomaRest(20, 30, 10));
