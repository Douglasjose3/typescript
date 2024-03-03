function calculaArea(base: number, altura:number): number {
    return base * altura;
}

//ARROW Function
const calculaArea2 = (base:number, altura:number): number => base * altura;

//REST
function somar(...numeros: number[]) {
    // numeros.reduce()
    console.log(numeros)
}

//VOID:quando não temos return, o return é o void
function idade(...numeros: number[]): void {
    console.log(idade);
}

function test(): string | number { // pipe aceita mais um outro tipo
    if (10 > 5) {
        return 'dez é maior que cinco'
    } else {
        return 5
    }
}
const resultadoDoTeste = test();

