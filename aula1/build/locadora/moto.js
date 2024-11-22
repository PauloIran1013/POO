"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const veiculo_1 = require("./veiculo");
class Moto extends veiculo_1.Veiculos {
    cilindradas;
    bagageiro;
    constructor(marca, modelo, ano, ValorLocacao, cilindradas, bagageiro) {
        super(marca, modelo, ano, ValorLocacao);
        this.cilindradas = cilindradas;
        this.bagageiro = bagageiro;
    }
    getCilindradas() {
        return this.cilindradas;
    }
    setCilindradas(cilindradas) {
        if (cilindradas > 0) {
            return this.cilindradas;
        }
        else {
            console.log("Cilindradas não podem ser menores ou iguais a zero.");
        }
    }
    getBagageiro() {
        return this.bagageiro;
    }
    exibirInfo() {
        console.log(`Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano: ${this.ano} \n Valor Locação: ${this.ValorLocacao} \n Tem Bagageiro: ${this.bagageiro} \n Cilindradas: ${this.cilindradas}`);
    }
    calcularAutonomia(consumo) {
        const consumoCalculo = consumo * this.cilindradas / 100;
        console.log(`A autonomia da moto é de ${consumoCalculo} km`);
    }
}
exports.Moto = Moto;
const moto1 = new Moto("Honda", "CB 500", 2021, 50.0, 500, true);
moto1.exibirInfo();
moto1.calcularAutonomia(10);
