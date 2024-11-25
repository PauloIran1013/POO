// Funções auxiliares para criar os objetos
function criarPiloto(): Piloto {
    const nome = prompt("Digite o nome do piloto:")!;
    const email = prompt("Digite o e-mail do piloto:")!;
    const cpf = prompt("Digite o CPF do piloto:")!;
    const breve = parseInt(prompt("Digite o número do breve do piloto:")!);
    const anosExperiencia = parseInt(prompt("Digite o número de anos de experiência do piloto:")!);
    const avaliacao = parseInt(prompt("Digite a avaliação do piloto de 0 a 10:")!);

    return new Piloto(nome, email, cpf, 'Piloto', breve, anosExperiencia, avaliacao);
}

function criarPassageiro(): Passageiro {
    const nome = prompt("Digite o nome do passageiro:")!;
    const email = prompt("Digite o e-mail do passageiro:")!;
    const cpf = prompt("Digite o CPF do passageiro:")!;
    const nPassaport = parseInt(prompt("Digite o número do passaporte do passageiro:")!);

    return new Passageiro(nome, email, cpf, 'Passageiro', nPassaport);
}

function criarAviao(): Avioes {
    const modelo = prompt("Digite o modelo do avião:")!;
    const marca = prompt("Digite a marca do avião:")!;
    const numAssentos = parseInt(prompt("Digite o número de assentos do avião:")!);
    const nome = prompt("Digite o nome do piloto do avião:")!;
    const email = prompt("Digite o e-mail do piloto do avião:")!;
    const cpf = prompt("Digite o CPF do piloto do avião:")!;
    const breve = parseInt(prompt("Digite o número do breve do piloto:")!);
    const anosExperiencia = parseInt(prompt("Digite o número de anos de experiência do piloto:")!);
    const avaliacao = parseInt(prompt("Digite a avaliação do piloto de 0 a 10:")!);
    const qtdTotaldecombustivel = parseInt(prompt("Digite a quantidade total de combustível do avião em litros:")!);

    return new Avioes(modelo, marca, numAssentos, nome, email, cpf, 'Piloto', breve, anosExperiencia, avaliacao, qtdTotaldecombustivel);
}

function criarInfoVoo(aviao: Avioes, passagem: Passagem): InfoVoo {
    const dataIda = prompt("Digite a data de ida do voo (formato: YYYY-MM-DD):")!;
    const dataVolta = prompt("Digite a data de volta do voo (formato: YYYY-MM-DD):")!;
    const tempoViagem = prompt("Digite o tempo de viagem (em horas):")!;
    const nAssentosOcupados = parseInt(prompt("Digite o número de assentos ocupados no voo:")!);
    const nAssentosDisponiveis = parseInt(prompt("Digite o número de assentos disponíveis no voo:")!);

    return new InfoVoo(aviao, passagem, dataIda, dataVolta, tempoViagem, nAssentosOcupados, nAssentosDisponiveis);
}

// Função para mostrar o menu e coletar a escolha do usuário
function mostrarMenu(): void {
    const escolha = parseInt(prompt(`
    Escolha uma opção:
    1 - Criar Piloto
    2 - Criar Passageiro
    3 - Criar Avião
    4 - Criar InfoVoo
    5 - Sair
    `)!);

    switch (escolha) {
        case 1:
            const piloto = criarPiloto();
            piloto.exibirInfo();
            mostrarMenu();
            break;
        case 2:
            const passageiro = criarPassageiro();
            passageiro.exibirInfo();
            mostrarMenu();
            break;
        case 3:
            const aviao = criarAviao();
            aviao.exibirInfo();
            mostrarMenu();
            break;
        case 4:
            const aviaoInfo = criarAviao();
            const passageiroInfo = criarPassageiro();
            const infoVoo = criarInfoVoo(aviaoInfo, passageiroInfo);
            infoVoo.exibirInfo();
            mostrarMenu();
            break;
        case 5:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            mostrarMenu();
            break;
    }
}

// Inicia o menu
mostrarMenu();

