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

// alunos.push({
//     nome: 'Julia',
//     cursos: ['Arquitetura'],
//     idade: 23,
// })

type aluno = {
    nome: string;
    cursos?: string[]; //? colocar quando o tipo for opcional
    idade: number;
}

const alunos: aluno[] = [{
    nome: 'Douglas',
    cursos: ['Front-end', 'Full Stack Puthon'],
    idade: 47,
},
{
    nome: 'Murilo',
    cursos: ['9º ano, inglês'],
    idade: 13,
}
]

alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 23,
})

//Utilizar como objetos
const novoAluno: aluno = { //Propriedades opcionais tem que colocar o ? no tipo que não foi chamado nessa opção
    nome: 'Gustavo',
    idade: 13,
}

function exibeAluno(aluno: aluno) { //(argugmento: propriedade)
    console.log(aluno.nome);
}

