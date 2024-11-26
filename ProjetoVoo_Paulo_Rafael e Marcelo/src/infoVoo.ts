

import { Avioes } from "./avioes";
import { Passagem } from "./passagem";

export class InfoVoo {
    private aviao: Avioes;
    private passagem: Passagem;
    private dataIda: string;
    private dataVolta: string;
    private tempoViagem: string;
    private nAssentosOcupados: number;
    private nAssentosDisponiveis: number;

    constructor(
        aviao: Avioes,               // Passagem de objeto Avioes
        passagem: Passagem,           // Passagem de objeto Passagem
        dataIda: string,
        dataVolta: string,
        tempoViagem: string,
        nAssentosOcupados: number,
        nAssentosDisponiveis: number
    ) {
        this.aviao = aviao;                 // Atribuindo o objeto Avioes
        this.passagem = passagem;           // Atribuindo o objeto Passagem
        this.dataIda = dataIda;
        this.dataVolta = dataVolta;
        this.tempoViagem = tempoViagem;
        this.nAssentosOcupados = nAssentosOcupados;
        this.nAssentosDisponiveis = nAssentosDisponiveis;
    }

    // Getters e Setters
    public getDataIda(): string {
        return this.dataIda;
    }

    public setDataIda(dataIda: string): void {
        this.dataIda = dataIda;
    }

    public getDataVolta(): string {
        return this.dataVolta;
    }

    public setDataVolta(dataVolta: string): void {
        this.dataVolta = dataVolta;
    }

    public getTempoViagem(): string {
        return this.tempoViagem;
    }

    public setTempoViagem(tempoViagem: string): void {
        this.tempoViagem = tempoViagem;
    }

    public getNAssentosOcupados(): number {
        return this.nAssentosOcupados;
    }

    public setNAssentosOcupados(nAssentosOcupados: number): void {
        this.nAssentosOcupados = nAssentosOcupados;
    }

    public getNAssentosDisponiveis(): number {
        return this.nAssentosDisponiveis;
    }

    public setNAssentosDisponiveis(nAssentosDisponiveis: number): void {
        this.nAssentosDisponiveis = nAssentosDisponiveis;
    }

    public exibirInfo() {
        this.aviao.exibirInfo();  // Exibe as informações do avião
        console.log(`Data de Ida: ${this.dataIda}, Data de Volta: ${this.dataVolta}`);
        console.log(`Tempo de Viagem: ${this.tempoViagem}`);
        console.log(`Assentos ocupados: ${this.nAssentosOcupados}, Assentos disponíveis: ${this.nAssentosDisponiveis}`);
        this.passagem.exibirInfo();  // Exibe as informações da passagem
    }

    // Método para ocupar assento
    public ocuparAssento(qtdAssentos: number) {
        if (qtdAssentos > this.nAssentosDisponiveis) {
            console.log('Quantidade de assentos não disponível.');
        } else {
            this.nAssentosDisponiveis -= qtdAssentos;
            this.nAssentosOcupados += qtdAssentos;
            console.log(`Assentos ocupados: ${qtdAssentos}, Restante de assentos disponíveis: ${this.nAssentosDisponiveis}`);
        }
    }

    // Método para desocupar assento
    public desocuparAssento(qtdAssentos: number) {
        if (qtdAssentos > this.nAssentosOcupados) {
            console.log('Não há assentos ocupados suficientes.');
        } else {
            this.nAssentosOcupados -= qtdAssentos;
            this.nAssentosDisponiveis += qtdAssentos;
            console.log(`Assentos desocupados: ${qtdAssentos}, Restante de assentos ocupados: ${this.nAssentosOcupados}`);
        }
    }
}
// Criando objetos de Avioes e Passagem
// const aviao1 = new Avioes('Airbus A320', 'Airbus', 180, 'João Oliveira', 'joao.oliveira@example.com', '987.654.321-00', 'Piloto', 54321, 12, 9, 500);
// const passagem1 = new Passagem('Carlos Silva', 'carlos.silva@example.com', '123.456.789-00', 'Passageiro', 56789, 'São Paulo', 350.00, true, 10);

// // Criando o objeto InfoVoo
// const infoVoo = new InfoVoo(aviao1, passagem1, '2024-12-01', '2024-12-10', '9h', 50, 130);

// // Exibindo informações do voo e da passagem
// infoVoo.exibirInfo();

// // Ocupando assentos
// infoVoo.ocuparAssento(5);  // Ocupa 5 assentos

// // Desocupando assentos
// infoVoo.desocuparAssento(2);  // Desocupa 2 assentos

