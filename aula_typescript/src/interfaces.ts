class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) { //metodo
        this.saldo += valor;
    }
}

//INTERFACE: por convensão sempre iniciar com a letra I + nome
interface ITransacional {
    //nome do metodo : função
    transferir: (valor: number, destinatario: Conta) => boolean //podemos usar uma classe para fazer a tipagem de um argumento
    taxaTransferencia: number;
}

interface IExemplo1 {
    cnpj: number;
}

interface IExemplo2 extends IExemplo1 {
    telefone: number;
}

// class ContaCorrente extends Conta implements ITransacional { //só podemos herdar uma Classe, mas podemos incrementar quantas interfaces quisermos
//     transferir (valor: number, destinatario: Conta) {
//         destinatario.sldo += valor;
//         return true;
//     };
//     taxaTransferencia: number = 0;
// }

class ContaCorrente extends Conta implements ITransacional { //opção para taxa de transferência
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number = 0;
}