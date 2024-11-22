import { Veiculos } from "./veiculo";
export declare class Caminhao extends Veiculos {
    private capacidadeCarga;
    private numeroEixo;
    constructor(marca: string, modelo: string, ano: number, ValorLocacao: number, capacidadeCarga: number, numeroEixo: number);
    getCapacidadeCarga(): number;
    setCapacidadeCarga(capacidadeCarga: number): void;
    getNumeroEixo(): number;
    setNumeroEixo(numeroEixo: number): void;
    exibirInfo(): void;
    ValorSeguro(anosExp: number): void;
}
