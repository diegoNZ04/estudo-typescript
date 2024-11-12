function fsomaRest(...n: number[]) {
    let s: number = 0;

    for (let en of n) {
        s += en;
    }

    // n.forEach((en) => {
    //   s += en;
    //})

    return s;
}

console.log(fsomaRest(20, 30, 10))