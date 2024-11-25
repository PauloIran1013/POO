"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avioes = void 0;
const piloto_1 = require("./piloto");
class Avioes extends piloto_1.Piloto {
    constructor(modelo, marca, numAssentos, nome, email, cpf, ocupacao, breve, anosExperiencia, avaliacao, qtdTotaldecombustivel) {
        super(nome, email, cpf, ocupacao, breve, anosExperiencia, avaliacao),
            this.modelo = modelo,
            this.marca = marca,
            this.numAssentos = numAssentos,
            this.qtdTotaldecombustivel = qtdTotaldecombustivel;
    }
    exibirInfo() {
        super.exibirInfo();
        console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Número de Assentos: ${this.numAssentos}, Capacidade De Combustível: ${this.qtdTotaldecombustivel}L`);
    }
    voar() {
        console.log(`O avião ${this.modelo} está voando ✈ !`);
    }
    pousar() {
        console.log(`O avião ${this.modelo} está pousando ✈ !`);
    }
}
exports.Avioes = Avioes;
const aviao1 = new Avioes('Airbus A320', 'Airbus', 180, 'João Oliveira', 'joao.oliveira@example.com', '987.654.321-00', 'Piloto', 54321, 12, 9, 500);
aviao1.exibirInfo();
aviao1.voar();
aviao1.pousar();
