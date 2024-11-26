import promptSync from 'prompt-sync'; 
const prompt = promptSync();

// Definindo as classes

class Aviao {
    constructor(
        public modelo: string,
        public marca: string,
        public numAssentos: number,
        public numAssentosDisponiveis: number
    ) {}

    // Método para verificar se há assentos disponíveis
    verificarAssentosDisponiveis(): boolean {
        return this.numAssentosDisponiveis > 0;
    }

    // Método para embarcar passageiro (reduz os assentos disponíveis)
    embarcarPassageiro() {
        if (this.numAssentosDisponiveis > 0) {
            this.numAssentosDisponiveis--;
            console.log("Passageiro embarcado com sucesso!");
        } else {
            console.log("Não há assentos disponíveis no avião.");
        }
    }

    // Método para desembarcar passageiro (restaura um assento)
    desembarcarPassageiro() {
        if (this.numAssentosDisponiveis < this.numAssentos) {
            this.numAssentosDisponiveis++;
            console.log("Passageiro desembarcado com sucesso!");
        } else {
            console.log("Não há passageiros para desembarcar.");
        }
    }

    // Método para exibir informações do avião
    exibirInfo() {
        console.log(`Avião: ${this.modelo}, Marca: ${this.marca}`);
        console.log(`Assentos totais: ${this.numAssentos}, Disponíveis: ${this.numAssentosDisponiveis}`);
    }
}

class Passageiro {
    constructor(
        public nome: string,
        public cpf: string,
        public passaporte: string
    ) {}

    // Método para exibir informações do passageiro
    exibirInfo() {
        console.log(`Nome: ${this.nome}, CPF: ${this.cpf}, Passaporte: ${this.passaporte}`);
    }
}

class Voo {
    constructor(
        public id: number,
        public origem: string,
        public destino: string,
        public data: string,
        public aviao: Aviao
    ) {}

    // Método para verificar a disponibilidade de voos
    verificarDisponibilidade() {
        if (this.aviao.verificarAssentosDisponiveis()) {
            console.log("Há voos disponíveis.");
        } else {
            console.log("Não há voos disponíveis no momento.");
        }
    }

    // Exibir informações sobre o voo
    exibirInfo() {
        console.log(`Voo ID: ${this.id}, Origem: ${this.origem}, Destino: ${this.destino}, Data: ${this.data}`);
        this.aviao.exibirInfo();
    }
}

// Sistema de Gerenciamento de Voos
class SistemaControleVoo {
    private voos: Voo[] = [];
    private passageiros: Passageiro[] = [];
    private avioes: Aviao[] = [];

    // Adiciona um avião ao sistema
    cadastrarAviao(aviao: Aviao) {
        this.avioes.push(aviao);
        console.log("Avião cadastrado com sucesso!");
    }

    // Adiciona um passageiro ao sistema
    cadastrarPassageiro(passageiro: Passageiro) {
        this.passageiros.push(passageiro);
        console.log("Passageiro cadastrado com sucesso!");
    }

    // Cadastrar um voo ao sistema
    cadastrarVoo(voo: Voo) {
        this.voos.push(voo);
        console.log("Voo cadastrado com sucesso!");
    }

    // Exibe os voos disponíveis
    consultarVoosDisponiveis() {
        if (this.voos.length === 0) {
            console.log("Não há voos cadastrados.");
        } else {
            this.voos.forEach(voo => voo.exibirInfo());
        }
    }

    // Relatório de estatísticas dos voos
    gerarRelatorio() {
        console.log("Relatório de Estatísticas de Voos:");
        this.voos.forEach(voo => {
            voo.exibirInfo();
            console.log(`Assentos Disponíveis: ${voo.aviao.numAssentosDisponiveis}`);
        });
    }

    // Embarcar passageiro em voo
    embarcarEmVoo(vooId: number, passaporte: string) {
        const voo = this.voos.find(v => v.id === vooId);
        const passageiro = this.passageiros.find(p => p.passaporte === passaporte);

        if (voo && passageiro) {
            voo.aviao.embarcarPassageiro();
        } else {
            console.log("Voo ou passageiro não encontrado.");
        }
    }

    // Desembarcar passageiro do voo
    desembarcarDeVoo(vooId: number, passaporte: string) {
        const voo = this.voos.find(v => v.id === vooId);
        const passageiro = this.passageiros.find(p => p.passaporte === passaporte);

        if (voo && passageiro) {
            voo.aviao.desembarcarPassageiro();
        } else {
            console.log("Voo ou passageiro não encontrado.");
        }
    }
}

// Função para o menu
function mostrarMenu() {
    const sistema = new SistemaControleVoo();
    
    let escolha: number;
    do {
        console.log(`Escolha uma opção:
        1 - Cadastrar Avião
        2 - Cadastrar Passageiro
        3 - Cadastrar Voo
        4 - Consultar Voos Disponíveis
        5 - Embarcar Passageiro
        6 - Desembarcar Passageiro
        7 - Gerar Relatório de Estatísticas
        8 - Sair
        `);
        
        escolha = parseInt(prompt("Digite sua escolha: ")!);

        switch (escolha) {
            case 1:
                const modelo = prompt("Digite o modelo do avião: ")!;
                const marca = prompt("Digite a marca do avião: ")!;
                const numAssentos = parseInt(prompt("Digite o número de assentos: ")!);
                const numAssentosDisponiveis = numAssentos; // Todos os assentos disponíveis inicialmente
                const aviao = new Aviao(modelo, marca, numAssentos, numAssentosDisponiveis);
                sistema.cadastrarAviao(aviao);
                break;
            
            case 2:
                const nome = prompt("Digite o nome do passageiro: ")!;
                const cpf = prompt("Digite o CPF do passageiro: ")!;
                const passaporte = prompt("Digite o passaporte do passageiro: ")!;
                const passageiro = new Passageiro(nome, cpf, passaporte);
                sistema.cadastrarPassageiro(passageiro);
                break;

            case 3:
                const origem = prompt("Digite a origem do voo: ")!;
                const destino = prompt("Digite o destino do voo: ")!;
                const data = prompt("Digite a data do voo (formato: YYYY-MM-DD): ")!;
                const vooId = Math.floor(Math.random() * 10000);
                const voo = new Voo(vooId, origem, destino, data, sistema.avioes[0]); // Assumindo que pelo menos um avião foi cadastrado
                sistema.cadastrarVoo(voo);
                break;

            case 4:
                sistema.consultarVoosDisponiveis();
                break;

            case 5:
                const vooIdEmbarcar = parseInt(prompt("Digite o ID do voo para embarque: ")!);
                const passaporteEmbarcar = prompt("Digite o passaporte do passageiro: ")!;
                sistema.embarcarEmVoo(vooIdEmbarcar, passaporteEmbarcar);
                break;

            case 6:
                const vooIdDesembarcar = parseInt(prompt("Digite o ID do voo para desembarque: ")!);
                const passaporteDesembarcar = prompt("Digite o passaporte do passageiro: ")!;
                sistema.desembarcarDeVoo(vooIdDesembarcar, passaporteDesembarcar);
                break;

            case 7:
                sistema.gerarRelatorio();
                break;

            case 8:
                console.log("Saindo...");
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    } while (escolha !== 8);
}

// Iniciar o sistema
mostrarMenu();
