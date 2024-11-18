export declare class Loja {
    protected nome: string;
    protected preco: number;
    protected estoque: number;
    constructor(nome: string, preco: number, estoque: number);
    getNome(): string;
    getPreco(): number;
    getEstoque(): number;
    exibirInfo(): void;
    attEstoque(): void;
}
