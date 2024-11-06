"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Cliente {
    nome;
    cpf;
    dataNascimento;
    qtdDinheiro;
    constructor(nome, cpf, dataNascimento, qtdDinheiro) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.qtdDinheiro = qtdDinheiro;
    }
    pessoaInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Data de Nascimento: ${this.dataNascimento}`);
        console.log(`Quantidade de Dinheiro: R$ ${this.qtdDinheiro.toFixed(2)}`);
    }
    dinheiroSuficiente() {
        const valor = parseFloat(prompt('Digite o valor do produto: '));
        if (valor > this.qtdDinheiro) {
            console.log(`Você não tem dinheiro para comprar o produto`);
        }
        else {
            console.log(`Você tem la grana`);
        }
    }
}
const pessoa1 = new Cliente("João Silva", "123.456.789-00", "1990-05-15", 1000);
pessoa1.pessoaInfo();
pessoa1.dinheiroSuficiente();
