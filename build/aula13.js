"use strict";
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(5, 5));
function novoUser(user, pass, nome) {
    console.log(`User..: ${user}`);
    console.log(`Password: ${pass}`);
    console.log(`Nome: ${nome}`);
}
novoUser("dnz", "123");
