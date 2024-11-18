"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
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
    attEstoque(NovoEstoque) {
        const estoque = this.estoque + NovoEstoque;
        console.log(`A Quantidade adicionada foi ${estoque}`);
    }
    removerEstoque(NovoEstoque) {
        const estoque = this.estoque - NovoEstoque;
        console.log(`A Quantidade Removida foi ${estoque}`);
    }
}
exports.Produto = Produto;
