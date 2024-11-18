"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimento = void 0;
const produto_1 = require("./produto");
class Alimento extends produto_1.Produto {
    dataVencimento;
    constructor(nome, preco, estoque, dataVencimento) {
        super(nome, preco, estoque);
        this.dataVencimento = dataVencimento;
    }
    getDataVencimento() {
        return this.dataVencimento;
    }
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Preco: R$ ${this.preco}, Estoque: ${this.estoque}, Data de vencimento ${this.dataVencimento}`);
    }
}
exports.Alimento = Alimento;
const alimento1 = new Alimento('Arroz', 11, 100, '2027-10-11');
alimento1.exibirInfo();
