"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
// class ContaCorrente extends Conta implements ITransacional { //só podemos herdar uma Classe, mas podemos incrementar quantas interfaces quisermos
//     transferir (valor: number, destinatario: Conta) {
//         destinatario.sldo += valor;
//         return true;
//     };
//     taxaTransferencia: number = 0;
// }
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    ;
}
