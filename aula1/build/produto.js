"use strict";
class Produtos {
    nome;
    valorCompra;
    valorVenda;
    quantidadeEstoque;
    constructor(nome, valorCompra, valorVenda, quantidadeEstoque) {
        this.nome = nome;
        this.valorCompra = valorCompra;
        this.valorVenda = valorVenda;
        this.quantidadeEstoque = quantidadeEstoque;
    }
    mostrarInfo() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Valor de Compra: R$ ${this.valorCompra.toFixed(2)}`);
        console.log(`Valor de Venda: R$ ${this.valorVenda.toFixed(2)}`);
    }
    totalInvestido() {
        const totalI = this.valorCompra * this.quantidadeEstoque;
        console.log(`Total investido: R$ ${totalI.toFixed(2)}`);
    }
    lucroPotencial() {
        const lucroT = (this.valorVenda - this.valorCompra) * this.quantidadeEstoque;
        console.log(`Lucro possível: R$ ${lucroT.toFixed(2)}`);
    }
    exibirEstoque() {
        console.log(`Estoque de ${this.nome}: ${this.quantidadeEstoque} unidades`);
    }
    atualizarValorCompra(novoValorCompra) {
        this.valorCompra = novoValorCompra;
    }
    atualizarEstoque(novaQuantidade) {
        this.quantidadeEstoque = novaQuantidade;
    }
    atualizarValorVenda(novoValorVenda) {
        this.valorVenda = novoValorVenda;
    }
}
function exibirMenu(produto) {
    const readlineSync = require('readline-sync');
    while (true) {
        console.log("\nMenu de Opções:");
        console.log("1 - Verificar valores de compra e venda");
        console.log("2 - Verificar total investido em estoque");
        console.log("3 - Verificar lucro ao vender todo estoque");
        console.log("4 - Atualizar preço de compra");
        console.log("5 - Atualizar preço de venda");
        console.log("6 - Atualizar quantidade em estoque");
        console.log("7 - Ver estoque atual");
        console.log("8 - Sair");
        const opcao = readlineSync.question("Escolha uma opcao: ");
        switch (opcao) {
            case '1':
                produto.mostrarInfo();
                break;
            case '2':
                produto.totalInvestido();
                break;
            case '3':
                produto.lucroPotencial();
                break;
            case '4':
                const novoValorCompra = parseFloat(readlineSync.question("Digite o novo valor de compra: R$ "));
                produto.atualizarValorCompra(novoValorCompra);
                console.log(`Novo valor de compra definido: R$ ${produto.valorCompra.toFixed(2)}`);
                break;
            case '5':
                const novoValorVenda = parseFloat(readlineSync.question("Digite o novo valor de venda: R$ "));
                produto.atualizarValorVenda(novoValorVenda);
                console.log(`Novo valor de venda definido: R$ ${produto.valorVenda.toFixed(2)}`);
                break;
            case '6':
                const novaQuantidade = parseInt(readlineSync.question("Digite a nova quantidade em estoque: "));
                produto.atualizarEstoque(novaQuantidade);
                console.log(`Novo estoque definido: ${produto.quantidadeEstoque} unidades`);
                break;
            case '7':
                produto.exibirEstoque();
                break;
            case '8':
                console.log("Saindo do sistema...");
                return;
            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    }
}
const produtinho = new Produtos("Notebook", 2000.00, 3500.00, 5);
exibirMenu(produtinho);
