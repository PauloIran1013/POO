import { Veiculos } from "./veiculo";
export declare class Moto extends Veiculos {
    private cilindradas;
    private bagageiro;
    constructor(marca: string, modelo: string, ano: number, ValorLocacao: number, cilindradas: number, bagageiro: boolean);
    getCilindradas(): number;
    setCilindradas(cilindradas: number): number | undefined;
    getBagageiro(): boolean;
    exibirInfo(): void;
    calcularAutonomia(consumo: number): void;
}
