declare class CLT {
    nome: string;
    salario: number;
    constructor(nome: string, salario: number);
    exibirInfo(): void;
    aumentarSalario(percentual: number): void;
}
declare const funcionario: CLT;
