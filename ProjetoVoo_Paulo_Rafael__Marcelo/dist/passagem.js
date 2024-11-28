"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passagem = void 0;
const Usuario_1 = require("./Usuario");
class Passagem extends Usuario_1.Passageiro {
    constructor(nome, email, cpf, ocupacao, nPassaport, destino, preco, disponivel, qtdDisponivel, dinheiro) {
        super(nome, email, cpf, ocupacao, nPassaport, dinheiro);
        this.destino = destino;
        this.preco = preco;
        this.disponivel = disponivel;
        this.qtdDisponivel = qtdDisponivel;
    }
    getDestino() {
        return this.destino;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(novoPreco) {
        if (novoPreco <= 0) {
            console.log(`Valor inválido`);
        }
        else {
            this.preco = novoPreco;
        }
    }
    getDisponivel() {
        return this.disponivel;
    }
    getQtdDisponivle() {
        return this.qtdDisponivel;
    }
    setQtdDisponivel(novoQtdDisponivel) {
        if (novoQtdDisponivel <= 0) {
            console.log(`Valor inválido`);
        }
        else {
            this.qtdDisponivel = novoQtdDisponivel;
        }
    }
    comprar(qtdComprada) {
        if (this.disponivel == true && this.dinheiro > this.preco && this.qtdDisponivel > 0 && this.qtdDisponivel >= qtdComprada) {
            this.qtdDisponivel -= qtdComprada;
            console.log(`Compra realizada com sucesso!`);
            console.log(`Quantidade disponível: ${this.qtdDisponivel}`);
        }
        else {
            console.log(`Passagem não disponível`);
        }
    }
    extornar(qtdExtornada) {
        this.disponivel = true;
        this.qtdDisponivel += qtdExtornada;
        console.log(`Passagem extornada com sucesso!`);
        console.log(`Nova quantidade disponível: ${this.qtdDisponivel}`);
    }
    exibirInfo() {
        super.exibirInfo(); // Chama o método exibirInfo da classe Passageiro para exibir os dados do passageiro
        console.log(`Destino: ${this.destino}, Preço: R$${this.preco}, Disponível: ${this.disponivel ? 'Sim' : 'Não'}, Quantidade disponível: ${this.qtdDisponivel}`);
    }
}
exports.Passagem = Passagem;
// // Criando um objeto da classe Passagem
// const passagem1 = new Passagem(
//     'Carlos Silva',                   // Nome do passageiro
//     'carlos.silva@example.com',        // Email do passageiro
//     '123.456.789-00',                 // CPF do passageiro
//     'Passageiro',                     // Ocupação do passageiro
//     56789,                            // Número do passaporte
//     'São Paulo',                      // Destino
//     350.00,                           // Preço da passagem
//     true,                             // Passagem disponível
//     10                                // Quantidade disponível
// );
// // Exibindo informações da passagem e do passageiro
// passagem1.exibirInfo();
// // Tentando comprar passagens com diferentes quantidades e saldo
// passagem1.comprar(400, 2);  // Conta do passageiro com R$400, comprando 2 passagens
// passagem1.comprar(400, 12); // Conta do passageiro com R$400, tentando comprar 12 passagens (excede a quantidade disponível)
// // Extornando a passagem
// passagem1.extornar(1);
// // Exibindo as informações após o estorno
// passagem1.exibirInfo();
