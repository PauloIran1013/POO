declare class Carros {
    marca: string;
    modelo: string;
    potencia: number;
    numeroMarcha: number;
    marchaAtual: number;
    velocidade: number;
    constructor(marca: string, modelo: string, potencia: number, numeroMarcha: number, marchaAtual: number, velocidade: number);
    exibirDados(): void;
    andar(): void;
    classificacao(): void;
}
declare const lambo: Carros;
