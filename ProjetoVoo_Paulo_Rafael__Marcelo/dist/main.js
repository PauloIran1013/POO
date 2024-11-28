"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const avioes_1 = require("./avioes");
const infoVoo_1 = require("./infoVoo");
const passagem_1 = require("./passagem");
const Usuario_1 = require("./Usuario");
const piloto_1 = require("./piloto");
// Função para criar um Piloto
function criarPiloto() {
    let nome = prompt("Informe o nome do piloto:");
    let email = prompt("Informe o email do piloto:");
    let cpf = prompt("Informe o CPF do piloto:");
    let breve = parseInt(prompt("Informe o número do breve do piloto:"));
    let anosExperiencia = parseInt(prompt("Informe os anos de experiência do piloto:"));
    let avaliacao = parseInt(prompt("Informe a avaliação do piloto (0 a 10):"));
    const piloto = new piloto_1.Piloto(nome, email, cpf, "Piloto", breve, anosExperiencia, avaliacao);
    piloto.exibirInfo();
    piloto.embarcar();
    piloto.pilotar();
    piloto.validarEmail();
    return piloto;
}
// Função para criar um Avião
function criarAviao() {
    let modelo = prompt("Informe o modelo do avião:");
    let marca = prompt("Informe a marca do avião:");
    let numAssentos = parseInt(prompt("Informe o número de assentos do avião:"));
    let qtdTotaldecombustivel = parseInt(prompt("Informe a quantidade total de combustível do avião (em litros):"));
    // Criando um piloto (para associar ao avião)
    const piloto = criarPiloto();
    // Criando o avião com o piloto
    const aviao = new avioes_1.Avioes(modelo, marca, numAssentos, piloto.nome, piloto.email, piloto.cpf, piloto.ocupacao, piloto.getBreve(), piloto.getAnosExp(), piloto.getAvaliacao(), qtdTotaldecombustivel);
    aviao.exibirInfo();
    aviao.voar();
    aviao.pousar();
    return aviao;
}
// Função para criar uma Passagem
function criarPassagem() {
    let nome = prompt("Informe o nome do passageiro:");
    let email = prompt("Informe o email do passageiro:");
    let cpf = prompt("Informe o CPF do passageiro:");
    let nPassaport = parseInt(prompt("Informe o número do passaporte do passageiro:"));
    let dinheiro = parseFloat(prompt("Informe o saldo bancário do passageiro:"));
    let destino = prompt("Informe o destino da passagem:");
    let preco = parseFloat(prompt("Informe o preço da passagem:"));
    let disponivel = Boolean("A passagem está disponível?");
    const passageiro = new Usuario_1.Passageiro(nome, email, cpf, "Passageiro", nPassaport, dinheiro);
    const passagem = new passagem_1.Passagem(nome, email, cpf, "Passageiro", nPassaport, destino, preco, disponivel, 10, dinheiro); // Aqui assumimos que a quantidade disponível seja 10, por exemplo
    passagem.exibirInfo();
    passagem.comprar(1);
    passagem.extornar(1);
    return passagem;
}
// Função para criar um voo (necessita de um avião e uma passagem)
function criarVoo() {
    const aviao = criarAviao();
    const passagem = criarPassagem();
    let dataIda = prompt("Informe a data de ida (formato YYYY-MM-DD):");
    let dataVolta = prompt("Informe a data de volta (formato YYYY-MM-DD):");
    let tempoViagem = prompt("Informe o tempo de viagem (em horas):");
    let nAssentosOcupados = parseInt(prompt("Informe a quantidade de assentos ocupados:"));
    let nAssentosDisponiveis = parseInt(prompt("Informe a quantidade de assentos disponíveis:"));
    const infoVoo = new infoVoo_1.InfoVoo(aviao, passagem, dataIda, dataVolta, tempoViagem, nAssentosOcupados, nAssentosDisponiveis);
    infoVoo.exibirInfo();
    infoVoo.ocuparAssento(1);
    infoVoo.desocuparAssento(1);
    return infoVoo;
}
function mostrarMenu() {
    console.log("\nMenu de Opções:");
    console.log("1 - Criar Piloto");
    console.log("2 - Criar Avião");
    console.log("3 - Criar Passagem");
    console.log("4 - Criar Voo");
    console.log("5 - Sair");
    let opcao = parseInt(prompt("Escolha uma opção: "));
    switch (opcao) {
        case 1:
            criarPiloto();
            break;
        case 2:
            criarAviao();
            break;
        case 3:
            criarPassagem();
            break;
        case 4:
            criarVoo();
            break;
        case 5:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}
// Loop para exibir o menu repetidamente até o usuário sair
while (true) {
    mostrarMenu();
}
