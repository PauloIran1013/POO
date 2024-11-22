"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculos = void 0;
class Veiculos {
    marca;
    modelo;
    ano;
    ValorLocacao;
    constructor(marca, modelo, ano, ValorLocacao) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ValorLocacao = ValorLocacao;
    }
    //getters e seters
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    getValorLocacao() {
        return this.ValorLocacao;
    }
    setValorLocacao(valor) {
        if (valor < 0) {
            this.ValorLocacao = valor;
        }
        else {
            console.log('Valor inválido');
        }
    }
}
exports.Veiculos = Veiculos;
