"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const veiculo_1 = require("./veiculo");
class Carro extends veiculo_1.Veiculos {
    numeroPortas;
    tipoCombustivel;
    constructor(marca, modelo, ano, ValorLocacao, numeroPortas, tipoCombustivel) {
        super(marca, modelo, ano, ValorLocacao);
        this.numeroPortas = numeroPortas;
        this.tipoCombustivel = tipoCombustivel;
    }
    exibirInfo() {
        console.log(`Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano: ${this.ano} \n Valor Locação: ${this.ValorLocacao} \n Número de portas ${this.numeroPortas} \n Tipo de combustivél ${this.tipoCombustivel}`);
    }
    getNumeroPortas() {
        return this.numeroPortas;
    }
    setNumeroPortas(numeroPortas) {
        if (numeroPortas > 0) {
            return this.numeroPortas;
        }
        else {
            console.log("Número de portas inválido");
        }
    }
    getTipoCombustivel() {
        return this.tipoCombustivel;
    }
    setTipoCombustivel(tipoCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
    }
    CalcularDesconto(desconto) {
        const ValorDesconto = this.ValorLocacao * (desconto / 100);
        const ValorFinal = this.ValorLocacao - ValorDesconto;
        console.log(`Valor final ${ValorFinal}`);
    }
}
exports.Carro = Carro;
const carro1 = new Carro("Fiat", "Palio", 2020, 100.0, 4, "Gasolina");
carro1.exibirInfo();
carro1.CalcularDesconto(10);
