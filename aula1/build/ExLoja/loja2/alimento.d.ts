import { Produto } from "./produto";
export declare class Alimento extends Produto {
    protected dataVencimento: string;
    constructor(nome: string, preco: number, estoque: number, dataVencimento: string);
    getDataVencimento(): string;
    exibirInfo(): void;
}
