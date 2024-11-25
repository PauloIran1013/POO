
export interface Usuario {
    nome: string;
    email: string;
    cpf: string;
    ocupacao: 'Passageiro'| 'Piloto';
    embarcar(): void;
    validarEmail(): void;
    exibirInfo(): void
}

export class Passageiro implements Usuario {
    public nome: string;
    public email: string;
    public cpf: string;
    public ocupacao: 'Passageiro';
    public nPassaport:number

    constructor(nome: string, email: string, cpf: string, ocupacao: 'Passageiro', nPassaport: number) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.ocupacao = ocupacao;
        this.nPassaport = nPassaport;
    }
   public embarcar(): void {
    console.log(`${this.nome} está embarcando...`);
}
    public validarEmail(): void {
        if (this.email.includes('@') && this.email.includes('.')) {
            console.log(`${this.nome} tem um e-mail válido.`);
        } else {
            console.log(`${this.nome} tem um e-mail inválido.`);
        }
    }
    exibirInfo(): void {
            
    }
}

const passageiro = new Passageiro('João', 'joao@example.com', '123.456.789-00', 'Passageiro', 123456);
passageiro.exibirInfo();
passageiro.embarcar(); // Exemplo de como chamar o método embarcar
passageiro.validarEmail(); // Exemplo de como chamar o método validarEmail
