import { Loja } from "./loja";
export declare class Alimento extends Loja {
    protected dataVencimento: string;
    constructor(nome: string, preco: number, estoque: number, dataVencimento: string);
    getDataVencimento(): string;
    exibirInfo(): void;
}
