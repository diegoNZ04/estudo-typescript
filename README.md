# README

Neste repositório está documentado todo o estudo sobre a linguagem TypeScript. Baseado no curso do canal CFBCursos.

link: https://youtube.com/playlist?list=PLx4x_zx8csUhtPMrkiGvFJVE5LX8Qat5s&si=gvWpXt19w4weM5uf

O intuito do estudo é fundamentar melhor a linguagem para seu uso em framework, já que Angular está incluído
na minha stack principal.
Ou seja, muitos conteúdos não serão tão detalhados por serem conceitos já estudados por mim, como por exemplo, a parte de funções.

Para compreender o conteúdo do repositório é necessário:

- Conhecimento em Lógica de Programação;
- Conhecimento em JavaScript
- Noção Básica de Programação Orientada a Objetos.

## Aula02: Entendendo as formas de compilar o TypeScript para gerar o JavaScript

- Digite `tsc aula02.ts` no terminal dentro do arquivo raiz do projeto;

- O arquivo `aula02.js` vai ser gerado com o mesmo conteúdo do arquivo .ts;

- Para fazer modificações, deve novamente rodar o compilador `tsc aula02.ts` e assim as modificações serão geradas.

## Aula03: Criando arquivo de configuração e facilitando a compilação

Você pode determinar a versão ES na qual o compilador vai gerar o arquivo. No exemplo da classe declarada em `aula03.ts`, o arquivo `.js` foi gerado dessa forma:

<img src="imgs\aula03-antes.png">

No qual é um padrão defassado. Para selecionar a uma versão ES adicionamos `--target "{Versão ES}"` no comando do compilador.

No exemplo abaixo, o seguinte comando foi usado: `tsc aula03.ts --target "ES2016`:

<img src="imgs\aula03-dps.png">

Agora para selecionar a versão mais recente do ES, usamos `ESNEXT`. Assim o comando se torna `tsc aula03.ts --target "ESNEXT`.

Gerando o código abaixo:

<img src="imgs\aula03-next.png">

### Arquivo de Configuração

Para criar o arquivo de configuração, usamos o comando: `tsc --init`
Dentro dele, temos muitas opções desabilitadas por meio de comentário, iremos habilitar:

- `"rootDirs"`: configura a pasta no qual nossos arquivos `.ts` serão guardados e escutados pelo compilador;
- `"outDir"`: configura a pasta no qual nossos arquivos `.js` serão gerados pelo compilador;
- "removeComments": faz com que os comentários dos nossos arquivos `.ts` sejam removidos quando compilados em arquivos `.js`;

E iremos modificar:

- `"target"`: para não precisar mudar manualmente a versão do ES.

Guardaremos todos os nossos arquivos `.ts` na pasta `src` e todos os arquivos `.js` serão gerados na pasta `build`.

Agora apenas precisamos usar o comado `tsc` no terminal do arquivo raiz do nosso projeto para gerar todos os arquivos `.js`

Para facilitar ainda mais, temos a opão `--watch` para os comandos `tsc`.

Digitando `tsc -w` no terminal do arquivo raiz do projeto, o compilador vai observar a criação e modificação dos arquivos `.ts` para a gerar os arquivos `.js`. Dessa forma, apenas precisamos salvar com o comando `Ctrl + S` e as atualizações serão feitas.

## Aula04: Entendendo o Type Inference

Diferente do JavaScript, o TypeScript por ser fortemente tipado nos permite definir um tipo de dado para uma variável declarada.
Quando não declaramos o tipo, ela é considerada como tipo `any`. Por exemplo: `let nome = "Diego";`.

Declarando uma variável de valor nulo, o ideal é definir um tipo de dado a ela, para depois ela ser reatribuída com algum outro valor
pertencente ao tipo de dado definido. Por exemplo:

`let nome: string;`

`nome = "Diego";`

## Aula05: Entendendo Union Types

Declarando uma variável e atribuindo uma estrutura de dados nela, como um array,além de definir o tipo de dados
também definimos a estrutura atribuída. Exemplo:

`let cursos: string[] = ["JavaScript", "TypeScript", "C++"];`

`cursos.push("Arduino");`

No entanto, o Union Types é um conceito que permite a definição de tipos diferentes na mesma variável. Por exemplo:

`let vtest: string | number;`

A variável `vtest` pode receber ou um valor do tipo string ou do tipo number. Já outros tipos não são aceitos.

Para uma variável aceitar qualquer tipo de dado, usamos o `any`. No entanto, tanto o `any` como o conceito de Union Types devem ser
usados em casos específicos e necessários, o ideal é sempre manter uma variável com apenas um tipo.

Para aplicar o Union Types em uma estrutura de dados, deve ser feito da seguinte maneira:

`let cursosEValores: (string | number)[] = ["JavaScript", 100, "TypeScript", 200,];`

## Aula06: Aprendendo mais sobre Array e Readonly Array

Em arrays, podemos manipular seus valores através de algumas funções:

- .push() : Adiciona valor valor no final do array

- .unshift() : Adiciona valor no inicio do array

- .pop() : Remove ultimo valor do array

- .shift() : Remove o primeiro valor do array

No entanto, podemos declarar um array que não pode ser manipulado, chamado de Readonly Array. Por exemplo:

`let numeros_ro: ReadonlyArray<number> = [100, 200, 300];`

Dessa forma, os métodos citados anteriomente não funcinam neste tipo de array, e nenhum outro que tenha como
função a manipulação da estrutura.

## Aula07: Tuplas em TypeScript

Tupla é um array que permite definir tipos específicos para posições específicas dentro da estrutura. Por exemplo:

`let coisas: [string, number, boolean] = ["corda", 10, true];`

Essa tupla define algumas coisas:

- Apenas existe 3 posições: 0, 1, 2;

- A posição 0 é definida como string;

- A posição 1 é definida como number;

- A posição 2 é definida como boolean.

Portando, os valores da tupla devem seguir essas características.
Para reatribuir algum valor, deve ser compatível ao tipo definido:

`coisas[2] = false;`

É possível acrescentar valores na tupla, desde que siga essas características:

`coisas.push("computador", 120, true);`

No output do terminal: `[ 'corda', 10, false, 'computador', 120, true ]`

No entanto, é impossível acessar esses valores de nenhema forma,
pois como já havia sido definido, existem apenas três posições.

Também é possível adicionar a característica readonly a uma tupla, dessa forma:

`let coisas: readonly [string, number, boolean] = ["corda", 10, true];`

Bloquando assim as funções de manipulação.

## Aula 08: Aprendendo sobre o tipo OBJECT

Um objeto é uma estrutura de dados capaz de receber variáveis/métodos e funções. Por exemplo:

`let dados = {
  nome: "Diego",
  idade: 20,
  status: "Ativo",
  ola: () => {
    console.log("Oi");
  },
  info: (p: string) => {
    console.log(p);
  },
};`

Assim, podemos acessar os dados através de seus métodos:

- Acessando um valor `console.log(dados.nome);`

- Reatribuindo um valor: `dados.nome = "Diogo";`

Assim como chamar funções de dentro dele:

- Chamando função: `dados.ola();`
- Chamando função atribuindo parâmetro: `dados.info("Gosta de academia");`
- Chamando função atribuindo parâmetro com um dado do próprio objeto: `dados.info(dados.nome);`

## Aula 09: Aprendendo sobre ENUM

Uma estrutura Enum é um objeto com chaves atribuídas a enumeradores. Como por exemplo:

`enum dias {
  domingo = 0,
  segunda = 1,
  terca = 2,
  quarta = 3,
  quinta = 4,
  sexta = 5,
  sabado = 6,
}`

Este caso é um Enum numérico, pois tem números sequenciais atribuídos que podem ser usados como acesso
ou serem acessados através das chaves.

- Acessar enumerador através da chave: `console.log(dias.domingo);`

- Acessar chave através do enumerador: `console.log(dias[1]);`

Através dessa estrutura, podemos fazer atribuições a partir dos enumeradores:

- Constante d recebe instância de uma nova data: `const d = new Date();`;
- O enum é atribuído com a variável de data com a chamada de função para obter o dia da semana: `console.log(dias[d.getDay()]);`;
- `d.getDay()` retorna o enumerador 5, pois este documento está sendo feito em uma quinta-feira;
- O enumerador da variável é relacionado com o enumerador 5 de `dias`, retornando `quinta`.

Outro tipo de enum são os textuais:

`enum cores {
  branco = "#fff",
  preto = "#000",
  vermelho = "#f00",
  verde = "#0f0",
  azul = "#00f",
}`

Ao invés de receberem números, recebem valores string. No entanto, estes não podem ser acessados pelo enumerador,
sendo possível apenas pelas chaves: `console.log(cores.branco);`

O últim tipo são os enuns de atribuição automática

`enum tipoUsuario {
  USER,
  ADMIN,
  PREMIUM,
}`

Sendo seu índice: 0, 1, 2

No geral, enuns podem também ser instanciados como tipos. Por exemplo:
`const tp: tipoUsuario = tipoUsuario.USER;`

## Aula 10: Diferenças entre NULL, UNDEFINED e UNKNOWN

- `Null` é o tipo nulo, podendo receber uma variável de valor nulo;

- `Undefined` é referente ao valor da variável de tipo indefinido;

- `Unknown` é um tipo de dado que pode receber qualquer valor (numérico, caractere) mas permanece como desconhecido,
  não recebendo seu tipo de forma automática. No entanto, é capaz de receber o tip `any`.

## Aula 11: Afirmação de tipos

Para isso, vamos declarar algumas variáveis:

```
let nvalor: number;
let svalor: string;
let uvalor: unknown;
```

Tentando fazer com que a variável `nvalor`receba a variável `uvalor`, o sistema nos retorna erro.
No entanto, é possível realizar a afirmação de tipo da seguinte maneira:

```
nvalor = <number>uvalor;
```

Executando o comando `console.log(typeof nvalor);`, o tipo `number` é retornado
mesmo a variável tendo recebido outra de tipo `unknown`

Para fazer o mesmo com valores `string`, deve ser usado os comandos de conversão:

- `.toString()`: number -> string
- `.parseInt()`: string -> number

## Aula 12: Funções Parte 1

PAra declarar declarar funções em TypeScript, usamos a estrutura:

```
function logar(user: string, password: string): void {
  console.log(`User..: ${user}`);
  console.log(`Password: ${password}`);
}
```

Os tipos dos parâmetros devem ser especificados. Como no exemplo anterior, `user` e `password` são especificados com o tipo `string`.
O tipo `void` determina que a função não deve ter um retorno.

```
function soma2(n1: number, n2: number): number {
  let r: number = n1 + n2;
  return r;
}
```

Agora neste exemplo, a função foi recebida com o tipo `number`, o que deixa implícito um retorno de valor também `number`.

## Aula 13: Funções Parte 2

Vamos ver como colocar valores padrões e opcionais em parâmetros de funções.

Para **valores padrões** deve ser implementados da seguinte forma:

```
function soma(n1: number = 0, n2: number = 0): number {
  return n1 + n2;
}
```

Assim, os valores `n1` e `n2` vão ser considerados como `0` caso outro valor não for passado.

Para **valores opcionais** deve ser implementados da seguinte maneira:

```
function novoUser(user: string, pass: string, nome?: string): void {
  console.log(`User..: ${user}`);
  console.log(`Password: ${pass}`);
  console.log(`Nome: ${nome}`);
}
```

Com o operador `?` ao lado do parâmetro, ele se torna opcional. Ou seja, não há obrigação de ser passado, sendo apenas
os parâmetros `user` e `pass` sendo exigidos.

## Aula 14: Arrow Functions

**Arrow Functions** é uma função anônima e é usada sempre quando não for preciso declarar uma função,
como em funções que exigem callback (Map, Filter, Foreach, etc).
Podem ser usadas no lugar de funções tradicionais, mas não sofrem efeito de _içamento_.

```
const teste = (): void => {
  console.log("Teste");
}
```

Sendo sua forma de chamada a mesma em que funções padrões: `teste()`

Outro exemplo de **Arrow Function**:

```
const fsoma = (n: number[]): number => {
    let s: number = 0;

    n.forEach((e) => {
        s += e;
    })

    return s;
}
```

Dentro da lógica da função, o comando `forEach` recebeu uma **Arrow Function**
como callback rebendo o parâmetro `e` (sem tipo especificado), representando cada elemento dentro do array
e o somando com a variável `s`, representando a soma, que recebeu valor inicial `0`.

## Aula 15: Parâmetros REST

Parâmetros REST são implementados na seguinte forma em uma função:

```
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
```

- `...n:number[]`: Dessa forma podemos passar múltiplos parâmetros na chamada da função
