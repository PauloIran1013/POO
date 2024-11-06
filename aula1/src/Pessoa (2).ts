class Pessoa {
    // Propriedades da classe
    private nome: string;
    private idade: number;

    // Construtor para inicializar as propriedades
    constructor(nome: string, idade: number
        ) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método para obter o nome
    public getNome(): string {
        return this.nome;
    }

    // Método para definir um novo nome
    public setNome(nome: string): void {
        this.nome = nome;
    }

    // Método para obter a idade
    public getIdade(): number {
        return this.idade;
    }

    // Método para definir uma nova idade
    public setIdade(idade: number): void {
       this.idade = idade;
    }

    // Método para exibir informações da pessoa
    public exibirInformacoes(): void {
       console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
       //console.log(`Nome: ${this.nome}`);
    }
}

const pessoa = new Pessoa("Renata", 48);
pessoa.exibirInformacoes();


