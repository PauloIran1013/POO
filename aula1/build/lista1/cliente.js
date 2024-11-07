"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    nome;
    email;
    telefone;
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    atualizarEmail(novoEmail) {
        if (this.validarEmail(novoEmail)) {
            this.email = novoEmail;
            console.log(`Email atualizado para: ${novoEmail}`);
        }
        else {
            console.log('Email inválido. O email deve conter um "@"');
        }
    }
    atualizarTelefone(novoTelefone) {
        if (this.validarTelefone(novoTelefone)) {
            this.telefone = novoTelefone;
            console.log(`Telefone atualizado para: ${novoTelefone}`);
        }
        else {
            console.log('Telefone inválido. O telefone deve conter apenas números.');
        }
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        console.log(`Telefone: ${this.telefone}`);
    }
    validarEmail(email) {
        return email.includes('@');
    }
    validarTelefone(telefone) {
        return /^\d+$/.test(telefone);
    }
}
const cliente1 = new Cliente("João Silva", "joao.silva@email.com", "123456789");
cliente1.exibirInformacoes();
cliente1.atualizarEmail("novo.email@dominio.com");
cliente1.atualizarTelefone("987654321");
cliente1.exibirInformacoes();
cliente1.atualizarEmail("emailinvalido.com");
cliente1.atualizarTelefone("telefone-invalido");
