import { Veiculos } from "./veiculo";
export declare class Carro extends Veiculos {
    private numeroPortas;
    private tipoCombustivel;
    constructor(marca: string, modelo: string, ano: number, ValorLocacao: number, numeroPortas: number, tipoCombustivel: string);
    exibirInfo(): void;
    getNumeroPortas(): number;
    setNumeroPortas(numeroPortas: number): number | undefined;
    getTipoCombustivel(): string;
    setTipoCombustivel(tipoCombustivel: string): void;
    CalcularDesconto(desconto: number): void;
}
