"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
class Loja {
    nome;
    preco;
    estoque;
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.preco;
    }
    getEstoque() {
        return this.estoque;
    }
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Preco: R$ ${this.preco}, Estoque: ${this.estoque}`);
    }
    attEstoque() {
        this.estoque += 1;
        console.log(`novo estoque ${this.estoque}`);
    }
}
exports.Loja = Loja;
const produto1 = new Loja('Escova de dente', 10, 5);
produto1.exibirInfo();
produto1.attEstoque();
const produto2 = new Loja('Rodo', 20, 10);
produto2.exibirInfo();
produto2.attEstoque();
