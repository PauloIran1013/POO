import { Loja } from "./loja";
export declare class Eletronicos extends Loja {
    private voltagem;
    constructor(nome: string, preco: number, estoque: number, voltagem: number);
    getVoltagem(): number;
    exibirInfo(): void;
}
