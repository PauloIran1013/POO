declare class Aluno {
    nome: string;
    idade: number;
    private notas;
    private matricula;
    constructor(nome: string, idade: number, matricula: string);
    adicionarNota(nota: number): void;
    calcularMedia(): number;
    exibirInformacoes(): void;
}
declare const estudante: Aluno;
declare class Pessoa {
    private _nome;
    private _idade;
    private _altura;
    constructor(nome: string, idade: number, altura: number);
    get nome(): string;
    set nome(nome: string);
    get idade(): number;
    set idade(idade: number);
    get altura(): number;
    set altura(altura: number);
    apresentar(): void;
    fazerAniversario(): void;
}
declare const pessoa1: Pessoa;
