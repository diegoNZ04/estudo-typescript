// Variável com Union Types
let vtest: string | number;
vtest = "Diego";
vtest = 2024;

// Definir tipos em estrutura de dados
let cursos: string[] = ["JavaScript", "TypeScript", "C++"];
let valores = [10, 200, 2024];

// Estrutura de dados com Union Types
let cursosEValores: (string | number)[] = [
  "JavaScript",
  100,
  "TypeScript",
  200,
];

cursos.push("Arduino");
valores.push(500);

console.log(cursos);
console.log(valores);
console.log(vtest);
console.log(cursosEValores);
