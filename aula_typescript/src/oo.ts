//CLASS
class Pessoa { //propriedades antes do construtor //podem ser vázias ou pré estabeleida
    nome: string; //propriedade 
    renda?: number; //propriendade opcional

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }
}

class ContaBancaria {
    protected saldo: number = 0; //propriedade poder ser pré estabelecida //encapsulamento protecte
    public saldo2: number; //aparece na classe e nas classes filhas //encapsulamento public

    constructor(saldo2: number) {
        this.saldo2 = saldo2;
    }

    static retornaNumeroDoBanco() { //somente no nível da classe //encapsulamento static
        return 123;
    }

    private getSaldo() { //privado apenas na propria classe //encapsulamento private
        return this.saldo;
    }

    depositar(valor: number) { //metodo depositar
        this.saldo += valor;
    }
}

class ContaBancariaCpf extends ContaBancaria { //herdeira
    depositar(valor: number): void { //polimorfismo pq implementamos o metodo diferente
        this.saldo = valor * 2; //não podemos multiplicar a valor, somente para exemplificar o polimorfismo
    }
}

const contaDoDouglas = new ContaBancariaCpf(123456);
ContaBancaria.retornaNumeroDoBanco();