"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passageiro = void 0;
class Passageiro {
    constructor(nome, email, cpf, ocupacao, nPassaport, dinheiro) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.ocupacao = ocupacao;
        this.nPassaport = nPassaport;
        this.dinheiro = dinheiro;
    }
    embarcar() {
        console.log(`${this.nome} está embarcando...`);
    }
    desembarcar() {
        console.log(`${this.nome} está desembarcando...`);
    }
    validarEmail() {
        if (this.email.includes('@') && this.email.includes('.')) {
            console.log(`${this.nome} tem um e-mail válido.`);
        }
        else {
            console.log(`${this.nome} tem um e-mail inválido.`);
        }
    }
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}, cpf: ${this.cpf}, Ocupação: ${this.ocupacao}, 
            Numero Passaport ${this.nPassaport}, Saldo bancario ${this.dinheiro}`);
    }
}
exports.Passageiro = Passageiro;
// const passageiro = new Passageiro('João', 'joao@example.com', '123.456.789-00', 'Passageiro', 123456);
// passageiro.exibirInfo();
// passageiro.embarcar(); // Exemplo de como chamar o método embarcar
// passageiro.validarEmail(); // Exemplo de como chamar o método validarEmail
