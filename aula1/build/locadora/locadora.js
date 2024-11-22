"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locadora = void 0;
const carro_1 = require("./carro");
class Locadora {
    veiculo = [];
    // Getter e Setter para o array de veículos
    getVeiculo() {
        return this.veiculo;
    }
    setVeiculo(veiculo) {
        this.veiculo = veiculo;
    }
    // Método para adicionar veículos
    addVeiculo(veiculo) {
        this.veiculo.push(veiculo);
    }
    // Método para remover veículo pelo modelo
    removeVeiculo(modelo) {
        this.veiculo = this.veiculo.filter(veiculo => veiculo.getModelo() !== modelo);
    }
    // Exibir todos os veículos
    exibirVeiculos() {
        console.log("Lista de Veículos:");
        this.veiculo.forEach(veiculo => veiculo.exibirInfo());
    }
    // Buscar veículos por marca
    buscarVeiculoPorMarca(marca) {
        return this.veiculo.filter(veiculo => veiculo.getMarca() === marca);
    }
}
exports.Locadora = Locadora;
function main() {
    // Criando a instância da Locadora
    const locadora = new Locadora();
    // Criando instâncias de veículos
    const carro1 = new carro_1.Carro("Fiat", "Palio", 2020, 100.0, 4, "Gasolina");
    const carro2 = new carro_1.Carro("Volkswagen", "Gol", 2019, 120.0, 4, "Flex");
    // Adicionando veículos à locadora
    locadora.addVeiculo(carro1);
    locadora.addVeiculo(carro2);
    // Exibindo todos os veículos
    locadora.exibirVeiculos();
    // Buscando veículos da marca 'Volkswagen'
    console.log("\nBuscando veículos da marca 'Volkswagen':");
    const veiculosVolkswagen = locadora.buscarVeiculoPorMarca("Volkswagen");
    veiculosVolkswagen.forEach(veiculo => veiculo.exibirInfo());
}
// Executando o código
main();
