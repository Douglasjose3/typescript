"use strict";
//CLASS
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
}
class ContaBancaria {
    constructor(saldo2) {
        this.saldo = 0; //propriedade poder ser pré estabelecida //encapsulamento protecte
        this.saldo2 = saldo2;
    }
    static retornaNumeroDoBanco() {
        return 123;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaCpf extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2; //não podemos multiplicar a valor, somente para exemplificar o polimorfismo
    }
}
const contaDoDouglas = new ContaBancariaCpf(123456);
ContaBancaria.retornaNumeroDoBanco();
