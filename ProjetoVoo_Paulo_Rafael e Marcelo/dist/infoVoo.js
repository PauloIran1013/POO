"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoVoo = void 0;
const avioes_1 = require("./avioes");
const passagem_1 = require("./passagem");
class InfoVoo {
    constructor(aviao, // Passagem de objeto Avioes
    passagem, // Passagem de objeto Passagem
    dataIda, dataVolta, tempoViagem, nAssentosOcupados, nAssentosDisponiveis) {
        this.aviao = aviao; // Atribuindo o objeto Avioes
        this.passagem = passagem; // Atribuindo o objeto Passagem
        this.dataIda = dataIda;
        this.dataVolta = dataVolta;
        this.tempoViagem = tempoViagem;
        this.nAssentosOcupados = nAssentosOcupados;
        this.nAssentosDisponiveis = nAssentosDisponiveis;
    }
    // Getters e Setters
    getDataIda() {
        return this.dataIda;
    }
    setDataIda(dataIda) {
        this.dataIda = dataIda;
    }
    getDataVolta() {
        return this.dataVolta;
    }
    setDataVolta(dataVolta) {
        this.dataVolta = dataVolta;
    }
    getTempoViagem() {
        return this.tempoViagem;
    }
    setTempoViagem(tempoViagem) {
        this.tempoViagem = tempoViagem;
    }
    getNAssentosOcupados() {
        return this.nAssentosOcupados;
    }
    setNAssentosOcupados(nAssentosOcupados) {
        this.nAssentosOcupados = nAssentosOcupados;
    }
    getNAssentosDisponiveis() {
        return this.nAssentosDisponiveis;
    }
    setNAssentosDisponiveis(nAssentosDisponiveis) {
        this.nAssentosDisponiveis = nAssentosDisponiveis;
    }
    exibirInfo() {
        this.aviao.exibirInfo(); // Exibe as informações do avião
        console.log(`Data de Ida: ${this.dataIda}, Data de Volta: ${this.dataVolta}`);
        console.log(`Tempo de Viagem: ${this.tempoViagem}`);
        console.log(`Assentos ocupados: ${this.nAssentosOcupados}, Assentos disponíveis: ${this.nAssentosDisponiveis}`);
        this.passagem.exibirInfo(); // Exibe as informações da passagem
    }
    // Método para ocupar assento
    ocuparAssento(qtdAssentos) {
        if (qtdAssentos > this.nAssentosDisponiveis) {
            console.log('Quantidade de assentos não disponível.');
        }
        else {
            this.nAssentosDisponiveis -= qtdAssentos;
            this.nAssentosOcupados += qtdAssentos;
            console.log(`Assentos ocupados: ${qtdAssentos}, Restante de assentos disponíveis: ${this.nAssentosDisponiveis}`);
        }
    }
    // Método para desocupar assento
    desocuparAssento(qtdAssentos) {
        if (qtdAssentos > this.nAssentosOcupados) {
            console.log('Não há assentos ocupados suficientes.');
        }
        else {
            this.nAssentosOcupados -= qtdAssentos;
            this.nAssentosDisponiveis += qtdAssentos;
            console.log(`Assentos desocupados: ${qtdAssentos}, Restante de assentos ocupados: ${this.nAssentosOcupados}`);
        }
    }
}
exports.InfoVoo = InfoVoo;
// Criando objetos de Avioes e Passagem
const aviao1 = new avioes_1.Avioes('Airbus A320', 'Airbus', 180, 'João Oliveira', 'joao.oliveira@example.com', '987.654.321-00', 'Piloto', 54321, 12, 9, 500);
const passagem1 = new passagem_1.Passagem('Carlos Silva', 'carlos.silva@example.com', '123.456.789-00', 'Passageiro', 56789, 'São Paulo', 350.00, true, 10);
// Criando o objeto InfoVoo
const infoVoo = new InfoVoo(aviao1, passagem1, '2024-12-01', '2024-12-10', '9h', 50, 130);
// Exibindo informações do voo e da passagem
infoVoo.exibirInfo();
// Ocupando assentos
infoVoo.ocuparAssento(5); // Ocupa 5 assentos
// Desocupando assentos
infoVoo.desocuparAssento(2); // Desocupa 2 assentos
