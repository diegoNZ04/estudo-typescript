"use strict";
function logar(user, password) {
    console.log(`User..: ${user}`);
    console.log(`Password: ${password}`);
}
logar("Diego", "123");
logar("Jivaldo", "456");
function soma2(n1, n2) {
    let r = n1 + n2;
    return r;
}
console.log(soma2(2, 4));
let s_res = soma2(2, 4).toString();
console.log(s_res);
