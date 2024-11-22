import { Veiculos } from "./veiculo";
export declare class Locadora {
    private veiculo;
    getVeiculo(): Veiculos[];
    setVeiculo(veiculo: Veiculos[]): void;
    addVeiculo(veiculo: Veiculos): void;
    removeVeiculo(modelo: string): void;
    exibirVeiculos(): void;
    buscarVeiculoPorMarca(marca: string): Veiculos[];
}
