declare class Conta {
    nomeCliente: string;
    saldo: number;
    numeroConta: number;
    constructor(nomeCliente: string, saldo: number, numeroConta: number);
    sacar(valor: number): void;
    depositar(valor: number): void;
}
declare class ContaPoupanca extends Conta {
    rendimentoDia: number;
    constructor(nomeCliente: string, saldo: number, numeroConta: number, rendimentoDia: number);
    rendimento(taxa: number): void;
}
declare class ContaEspecial extends Conta {
    limite: number;
    constructor(nomeCliente: string, saldo: number, numeroConta: number, limite: number);
    sacar(valor: number): void;
}
declare const contaPoupanca: ContaPoupanca;
declare const contaEspecial: ContaEspecial;
