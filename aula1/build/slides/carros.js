"use strict";
class Carros {
    marca;
    modelo;
    potencia;
    numeroMarcha;
    marchaAtual;
    velocidade;
    constructor(marca, modelo, potencia, numeroMarcha, marchaAtual, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.numeroMarcha = numeroMarcha;
        this.marchaAtual = marchaAtual;
        this.velocidade = velocidade;
    }
    exibirDados() {
        console.log(`Marca: ${this.marca};
  Modelo: ${this.modelo};
  Potência: hp ${this.potencia};
  Número de marchas: ${this.numeroMarcha};
  Marcha atual: ${this.marchaAtual};
  Velocidade: Km/h${this.velocidade}`);
    }
    andar() {
        if (this.velocidade >= 1) {
            console.log('O carro está em movimento');
        }
        else {
            console.log('O carro está parado');
        }
    }
    classificacao() {
        if (this.potencia <= 100) {
            console.log('O carro é um carro urbano');
        }
        else {
            console.log("O carro é potente");
        }
    }
}
const lambo = new Carros('Lamborghini', 'Huracán', 640, 7, 3, 150);
lambo.exibirDados();
lambo.andar();
lambo.classificacao();
