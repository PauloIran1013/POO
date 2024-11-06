declare class Produtos {
    nome: string;
    valorCompra: number;
    valorVenda: number;
    quantidadeEstoque: number;
    constructor(nome: string, valorCompra: number, valorVenda: number, quantidadeEstoque: number);
    mostrarInfo(): void;
    totalInvestido(): void;
    lucroPotencial(): void;
    exibirEstoque(): void;
    atualizarValorCompra(novoValorCompra: number): void;
    atualizarEstoque(novaQuantidade: number): void;
    atualizarValorVenda(novoValorVenda: number): void;
}
declare function exibirMenu(produto: Produtos): void;
declare const produtinho: Produtos;
