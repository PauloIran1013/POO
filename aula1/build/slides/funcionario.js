"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Funcionario {
    nome;
    cpf;
    dataNasc;
    salario;
    dataAdmissao;
    cargo;
    energia;
    credibilidade;
    constructor(nome, cpf, dataNasc, salario, dataAdmissao, cargo, energia = 100, credibilidade = 100) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.salario = salario;
        this.dataAdmissao = dataAdmissao;
        this.cargo = cargo;
        this.energia = energia;
        this.credibilidade = credibilidade;
    }
    trabalhar() {
        if (this.energia >= 10) {
            this.energia -= 10;
            console.log(`${this.nome} deu uma trabalhada e agora tem ${this.energia} de energia.`);
        }
        else {
            console.log(`${this.nome} está cansado.`);
        }
    }
    tomarCafe() {
        this.energia += 15;
        if (this.energia > 100) {
            this.energia = 100;
        }
        console.log(`${this.nome} tomou café e agora tem ${this.energia} de energia.`);
    }
    fofocar() {
        if (this.credibilidade >= 5) {
            this.credibilidade -= 5; // Reduz a credibilidade ao fofocar
            console.log(`${this.nome} fofocou e agora tem ${this.credibilidade} de credibilidade.`);
        }
        else {
            console.log(`${this.nome} não tem credibilidade suficiente para fofocar.`);
        }
    }
    solicitarAumento() {
        if (this.credibilidade >= 20) {
            this.credibilidade -= 20;
            const aumento = Math.random() * (0.15 - 0.05) + 0.05; // Aumento entre 5% e 15%
            this.salario *= (1 + aumento);
            console.log(`${this.nome} solicitou um aumento e agora seu salário é ${this.salario.toFixed(2)}.`);
        }
        else {
            console.log(`${this.nome} não tem credibilidade suficiente para solicitar um aumento.`);
        }
    }
    dormir() {
        this.energia = 100;
        console.log(`${this.nome} dormiu e agora está com 100 de energia.`);
    }
}
function simulador() {
    const nome = prompt("Digite o nome do funcionário: ") || "";
    const cpf = prompt("Digite o CPF do funcionário: ") || "";
    const dataNasc = prompt("Digite a data de nascimento (dd/mm/aaaa): ") || "";
    const salario = parseFloat(prompt("Digite o salário do funcionário: ") || "0");
    const dataAdmissao = prompt("Digite a data de admissão (dd/mm/aaaa): ") || "";
    const cargo = prompt("Digite o cargo do funcionário: ") || "";
    const funcionario = new Funcionario(nome, cpf, dataNasc, salario, dataAdmissao, cargo);
    while (true) {
        console.log("\nEscolha uma ação:");
        console.log("1 - Trabalhar");
        console.log("2 - Tomar café");
        console.log("3 - Fofocar");
        console.log("4 - Solicitar aumento");
        console.log("5 - Dormir");
        console.log("6 - Sair");
        const acao = prompt("Digite o número da ação desejada: ") || "";
        switch (acao) {
            case '1':
                funcionario.trabalhar();
                break;
            case '2':
                funcionario.tomarCafe();
                break;
            case '3':
                funcionario.fofocar();
                break;
            case '4':
                funcionario.solicitarAumento();
                break;
            case '5':
                funcionario.dormir();
                break;
            case '6':
                console.log("Saindo do simulador.");
                return;
            default:
                console.log("Ação inválida. Tente novamente.");
        }
    }
}
simulador();
