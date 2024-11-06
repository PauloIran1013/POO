
import promptSync from "prompt-sync";

const prompt = promptSync();

class Funcionario {
    nome: string;
    cpf: string;
    dataNasc: string;
    salario: number;
    dataAdmissao: string;
    cargo: string;
    energia: number;
    credibilidade: number;

    constructor(
        nome: string,
        cpf: string,
        dataNasc: string,
        salario: number,
        dataAdmissao: string,
        cargo: string,
        energia: number = 100,
        credibilidade: number = 100,
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.salario = salario;
        this.dataAdmissao = dataAdmissao;
        this.cargo = cargo;
        this.energia = energia;
        this.credibilidade = credibilidade;
    }

    trabalhar(): void {
        if (this.energia >= 10) {
            this.energia -= 10;
            console.log(`${this.nome} deu uma trabalhada e agora tem ${this.energia} de energia.`);
        } else {
            console.log(`${this.nome} está cansado.`);
        }
    }

    tomarCafe(): void {
        this.energia += 15;
        if (this.energia > 100) {
            this.energia = 100;
        }
        console.log(`${this.nome} tomou café e agora tem ${this.energia} de energia.`);
    }

    fofocar(): void {
        if (this.credibilidade >= 5) {
            this.credibilidade -= 5; // Reduz a credibilidade ao fofocar
            console.log(`${this.nome} fofocou e agora tem ${this.credibilidade} de credibilidade.`);
        } else {
            console.log(`${this.nome} não tem credibilidade suficiente para fofocar.`);
        }
    }

    solicitarAumento(): void {
        if (this.credibilidade >= 20) {
            this.credibilidade -= 20;
            const aumento = Math.random() * (0.15 - 0.05) + 0.05; // Aumento entre 5% e 15%
            this.salario *= (1 + aumento);
            console.log(`${this.nome} solicitou um aumento e agora seu salário é ${this.salario.toFixed(2)}.`);
        } else {
            console.log(`${this.nome} não tem credibilidade suficiente para solicitar um aumento.`);
        }
    }

    dormir(): void {
        this.energia = 100;
        console.log(`${this.nome} dormiu e agora está com 100 de energia.`);
    }
}

function simulador(): void {
    const nome = prompt("Digite o nome do funcionário: ") || "";
    const cpf = prompt("Digite o CPF do funcionário: ") || "";
    const dataNasc = prompt("Digite a data de nascimento (dd/mm/aaaa): ") || "";
    const salario = parseFloat(prompt("Digite o salário do funcionário: ") || "0");
    const dataAdmissao = prompt("Digite a data de admissão (dd/mm/aaaa): ") || "";
    const cargo = prompt("Digite o cargo do funcionário: ") || "";

    const funcionario = new Funcionario(nome, cpf, dataNasc, salario, dataAdmissao, cargo);

    while (true) {
        console.log("\nEscolha uma ação:");
        console.log("1 - Trabalhar");
        console.log("2 - Tomar café");
        console.log("3 - Fofocar");
        console.log("4 - Solicitar aumento");
        console.log("5 - Dormir");
        console.log("6 - Sair");

        const acao = prompt("Digite o número da ação desejada: ") || "";

        switch (acao) {
            case '1':
                funcionario.trabalhar();
                break;
            case '2':
                funcionario.tomarCafe();
                break;
            case '3':
                funcionario.fofocar();
                break;
            case '4':
                funcionario.solicitarAumento();
                break;
            case '5':
                funcionario.dormir();
                break;
            case '6':
                console.log("Saindo do simulador.");
                return;
            default:
                console.log("Ação inválida. Tente novamente.");
        }
    }
}
 simulador();