"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caminhao = void 0;
const veiculo_1 = require("./veiculo");
class Caminhao extends veiculo_1.Veiculos {
    capacidadeCarga;
    numeroEixo;
    constructor(marca, modelo, ano, ValorLocacao, capacidadeCarga, numeroEixo) {
        super(marca, modelo, ano, ValorLocacao);
        this.capacidadeCarga = capacidadeCarga;
        this.numeroEixo = numeroEixo;
    }
    getCapacidadeCarga() {
        return this.capacidadeCarga;
    }
    setCapacidadeCarga(capacidadeCarga) {
        if (capacidadeCarga > 0) {
            this.capacidadeCarga = capacidadeCarga;
        }
        else {
            console.log("Capacidade de carga invalida");
        }
    }
    getNumeroEixo() {
        return this.numeroEixo;
    }
    setNumeroEixo(numeroEixo) {
        if (numeroEixo > 0) {
            this.numeroEixo = numeroEixo;
        }
        else {
            console.log("Numero de eixos invalido");
        }
    }
    exibirInfo() {
        console.log(`Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano: ${this.ano} \n Valor Locação: ${this.ValorLocacao} \n Capacidade de carga 
            ${this.capacidadeCarga} \n Numero de eixo: ${this.numeroEixo}`);
    }
    ValorSeguro(anosExp) {
        const seguro = anosExp * this.ValorLocacao;
        console.log(`Valor do seguro: ${seguro}`);
    }
}
exports.Caminhao = Caminhao;
const caminhao1 = new Caminhao("Volvo", "FH16", 2019, 500.0, 20, 4);
caminhao1.exibirInfo();
caminhao1.ValorSeguro(5);
