"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronicos = void 0;
const loja_1 = require("./loja");
class Eletronicos extends loja_1.Loja {
    voltagem;
    constructor(nome, preco, estoque, voltagem) {
        super(nome, preco, estoque);
        this.voltagem = voltagem;
    }
    getVoltagem() {
        return this.voltagem;
    }
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Preco: R$ ${this.preco}, Estoque: ${this.estoque}, voltagem ${this.voltagem}`);
    }
}
exports.Eletronicos = Eletronicos;
const eletronico1 = new Eletronicos('Notebook', 2000, 10, 220);
eletronico1.exibirInfo();
eletronico1.attEstoque();
