// Valores padrões do parâmetro
function soma(n1: number = 0, n2: number = 0): number {
  return n1 + n2;
}

console.log(soma(5, 5));

// Padrões opcionais
function novoUser(user: string, pass: string, nome?: string): void {
  console.log(`User..: ${user}`);
  console.log(`Password: ${pass}`);
  console.log(`Nome: ${nome}`);
}

novoUser("dnz", "123");

/*
Output:
    User..: dnz
    Password: 123
    Nome: undefined
*/
