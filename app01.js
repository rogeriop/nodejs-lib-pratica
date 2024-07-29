/*
Nome      : app01
Finalidade: Curso de JavaScript com Node.js: criando sua primeira biblioteca
Observação: 01 Acessando e lendo arquivos
Data      : 29/07/2024
*/

const read = require('readline-sync');
const color = require('@colors/colors');
const { pare, ok, pula } = require('./app00.js');

console.clear();

//# 1 #######################################################################
console.log("1 - Criar um arquivo JavaScript que recebe um argumento da linha de comando e exibe esse argumento no console.\n".cyan);
console.log("** Para testar chame app01 e passe o argumento na linha de comando.\n".yellow);
const argumento = process.argv;
console.log(argumento[2]);
pare();

console.log("2 - Utilizar o módulo fs do Node.js para ler o conteúdo de um arquivo.\n".cyan);
console.log("** O arquivo que verás a seguir encontra-se no caminho 'dados/texto-web.txt'.\n".yellow);
const fs = require('fs');

fs.readFile('./dados/texto-web.txt', 'utf-8', (erro, texto) => {
    console.log(texto);
});

pare();



