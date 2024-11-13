class Conta{
    nomeCliente:string;
    saldo: number;
    numeroConta: number;
    constructor(nomeCliente: string, saldo: number, numeroConta: number) {
        this.nomeCliente = nomeCliente;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    sacar(valor:number):void{
        if(valor > this.saldo){
            console.log("Saldo insuficiente");
    }else{
        this.saldo -= valor;
        console.log(`Saque realizado com sucesso, novo saldo: ${this.saldo}`)
}
}
depositar(valor:number):void{
this.saldo += valor
console.log(`Deposito realizado com sucesso, novo saldo: ${this.saldo}`)
}
}

class ContaPoupanca extends Conta{
    rendimentoDia:number;
    constructor(nomeCliente: string, saldo: number, numeroConta: number, rendimentoDia:number){
        super(nomeCliente, saldo, numeroConta);
        this.rendimentoDia = rendimentoDia;
    }
    rendimento(taxa:number):void{
      const RT =  this.saldo += this.saldo * taxa * this.rendimentoDia
      console.log(`Rendimento de R$${RT} aplicado com sucesso! Novo saldo: R$${this.saldo}`);
    }
}

class ContaEspecial extends Conta{
    limite: number;
constructor(nomeCliente: string, saldo: number, numeroConta: number, limite:number){
    super(nomeCliente, saldo, numeroConta);
    this.limite = limite;
}
sacar(valor: number): void {
    if (valor > this.saldo + this.limite) {
        console.log("Saldo insuficiente");
}else{
    this.saldo -= valor;
    console.log(`Saque realizado com sucesso, novo saldo: ${this.saldo}`)
}
}
}


// Conta Poupança
const contaPoupanca = new ContaPoupanca("João Silva", 1000, 12345, 10);
console.log("\nCriando conta poupança:");
contaPoupanca.sacar(200); // Saque de 200
contaPoupanca.depositar(500); // Depósito de 500
contaPoupanca.rendimento(5); // Aplica rendimento de 5%

// Conta Especial
const contaEspecial = new ContaEspecial("Maria Oliveira", 500, 67890, 1000);
console.log("\nCriando conta especial:");
contaEspecial.sacar(1200); // Saque de 1200 (dentro do limite)
contaEspecial.depositar(300); // Depósito de 300
contaEspecial.sacar(2000); // Tentativa de saque de 2000 (excede o limite)