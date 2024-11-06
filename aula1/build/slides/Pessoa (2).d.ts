declare class Pessoa {
    private nome;
    private idade;
    constructor(nome: string, idade: number);
    getNome(): string;
    setNome(nome: string): void;
    getIdade(): number;
    setIdade(idade: number): void;
    exibirInformacoes(): void;
}
declare const pessoa: Pessoa;
