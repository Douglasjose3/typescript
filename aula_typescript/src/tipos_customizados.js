"use strict";
// const alunos = [{
//     nome: 'Douglas',
//     cursos: ['Front-end', 'Full Stack Puthon'],
//     idade: 47,
// },
// {
//     nome: 'Murilo',
//     cursos: ['9º ano, inglês'],
//     idade: 13,
// }
// ]
const alunos = [{
        nome: 'Douglas',
        cursos: ['Front-end', 'Full Stack Puthon'],
        idade: 47,
    },
    {
        nome: 'Murilo',
        cursos: ['9º ano, inglês'],
        idade: 13,
    }
];
alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 23,
});
//Utilizar como objetos
const novoAluno = {
    nome: 'Gustavo',
    idade: 13,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
