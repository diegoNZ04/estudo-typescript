function logar(user: string, password: string): void {
  console.log(`User..: ${user}`);
  console.log(`Password: ${password}`);
}

logar("Diego", "123");
logar("Jivaldo", "456");

function soma2(n1: number, n2: number): number {
  let r: number = n1 + n2;
  return r;
}

console.log(soma2(2, 4));

let s_res: string = soma2(2, 4).toString();

console.log(s_res);
