"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimento = void 0;
const loja_1 = require("./loja");
class Alimento extends loja_1.Loja {
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
alimento1.attEstoque();
