"use strict";
//tipa BOOLEAN: não podemos atribuir um valor de string para um tipo boolean
let estaChovendo = false; //uso dos (dois pontos:) para explicar qual o tipo da variável
estaChovendo = true;
//tipa NUMBER: não tem diferença entre eles, mesmo usando altura e idade por exemplo
let indade = 47;
let altura = 1.82;
//tipa STRING:
const nacionalidade = "brasileiro";
//ARRAY: não podemos usar um array com vários tipos: string, number e bolleano
//Array é representado pelos []
const colegas = ['Douglas', 'Murilo', 'André']; //uma maneira de construção de array
const tecnologias = ['HTML', 'CSS', 'Javascript']; //outro modo de construir um array
//READ ONLY ARRAY: nesse array não podemos usar o push para add novos itens
const notas = [5, 7, 8, 3, 5];
//TUBULA
const lista = ['Douglas', true, 15];
const lista2 = ['Douglas', true, 15];
//UNIONTYPE: atribui mais de uma tipo, nesse caso um number + string
let idadeDaVanessa = 42;
idadeDaVanessa = '42 anos';
//ANY: aceita qualquer valor. Ele foge da proposta, server quando não sabemos qual dado irá entrar
let dadosDaApi;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'string';
//TIPAGEM EXPLICITA: Mesmo assim é melhor deixar claro o tipo que está usando
let curso = 'front-end';
