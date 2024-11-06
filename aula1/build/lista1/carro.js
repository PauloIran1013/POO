"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Carro {
    marca;
    modelo;
    ano;
    quilometragem;
    constructor(marca, modelo, ano, quilometragem) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.quilometragem = quilometragem;
    }
    exibirInfo() {
        console.log(`Marca: ${this.marca}; Modelo:${this.modelo};  Ano:${this.ano}; Quilometragem:${this.quilometragem}`);
    }
    andar(km) {
        this.quilometragem += km;
        if (km > 0) {
            console.log(`O carro ${this.modelo} percorreu ${km} km. Quilometragem total: ${this.quilometragem} km.`);
        }
        else {
            console.log("Digite um valor válido");
        }
    }
}
const meuCarro = new Carro('Toyota', 'Corolla', 2020, 15000);
meuCarro.exibirInfo();
meuCarro.andar(1000);
