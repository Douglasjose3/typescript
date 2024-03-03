//tipa BOOLEAN: não podemos atribuir um valor de string para um tipo boolean
let estaChovendo: boolean = false //uso dos (dois pontos:) para explicar qual o tipo da variável
estaChovendo =  true

//tipa NUMBER: não tem diferença entre eles, mesmo usando altura e idade por exemplo
let indade: number = 47
let altura: number = 1.82

//tipa STRING:
const nacionalidade: string = "brasileiro"

//ARRAY: não podemos usar um array com vários tipos: string, number e bolleano
//Array é representado pelos []
const colegas: string[] = ['Douglas', 'Murilo', 'André'] //uma maneira de construção de array
const tecnologias: Array<string> = ['HTML', 'CSS', 'Javascript'] //outro modo de construir um array

//READ ONLY ARRAY: nesse array não podemos usar o push para add novos itens
const notas: ReadonlyArray<number> = [5, 7, 8, 3, 5]

//TUBULA
const lista: [string, boolean, number] = ['Douglas', true, 15];
const lista2: [nome: string, estaEstudando: boolean, indade: number] = ['Douglas', true, 15];

//UNIONTYPE: atribui mais de uma tipo, nesse caso um number + string
let idadeDaVanessa: number | string = 42
idadeDaVanessa = '42 anos'

//ANY: aceita qualquer valor. Ele foge da proposta, server quando não sabemos qual dado irá entrar
let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1, 2, 3]
dadosDaApi = 'string'

//TIPAGEM EXPLICITA: Mesmo assim é melhor deixar claro o tipo que está usando
let curso = 'front-end'