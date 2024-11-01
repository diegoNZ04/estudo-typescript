"use strict";
class Curso {
    canal = null;
    curso = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso("CFBCurso", "TypeScript");
console.log(c1.canal);
console.log(c1.curso);
