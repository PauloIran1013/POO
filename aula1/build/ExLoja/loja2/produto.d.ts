export declare class Produto {
    protected nome: string;
    protected preco: number;
    protected estoque: number;
    constructor(nome: string, preco: number, estoque: number);
    getNome(): string;
    getPreco(): number;
    getEstoque(): number;
    exibirInfo(): void;
    attEstoque(NovoEstoque: number): void;
    removerEstoque(NovoEstoque: number): void;
}
