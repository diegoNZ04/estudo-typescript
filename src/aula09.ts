// enum número
enum dias {
  domingo = 0,
  segunda = 1,
  terca = 2,
  quarta = 3,
  quinta = 4,
  sexta = 5,
  sabado = 6,
}

console.log(dias.domingo); // retorna 0
// console.log(dias['domingo])
console.log(dias[1]); // retorna 'domingo'

const d = new Date();
console.log(d); // retorna data atual

// .getDate() - numero mes
// .getDay() - numero dia da semana

console.log(dias[d.getDay()]);

// enum textual
enum cores {
  branco = "#fff",
  preto = "#000",
  vermelho = "#f00",
  verde = "#0f0",
  azul = "#00f",
}

console.log(cores.branco); // retorna '#fff'

// enum atribuição automática
enum tipoUsuario {
  USER,
  ADMIN,
  PREMIUM,
}

console.log(tipoUsuario.PREMIUM); // retorna 2

// enum como tip
const tp: tipoUsuario = tipoUsuario.USER;

console.log(tp); // retorna 0
