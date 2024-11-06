declare class Produto {
    private nome;
    private preco;
    private quantidade;
    constructor(nome: string, preco: number, quantidade: number);
    exibirInfo(): void;
    adicionarEstoque(qtd: number): void;
    removerEstoque(qtd: number): void;
}
declare const produto: Produto;
