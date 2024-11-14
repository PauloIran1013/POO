declare class Pessoa1 {
    private nome;
    private idade;
    constructor(nome: string, idade: number);
    getNome(): string;
    setNome(nome: string): void;
    getIdade(): number;
    setIdade(idade: number): void;
}
declare class PessoaFisica extends Pessoa1 {
    private cpf;
    private cnh;
    constructor(nome: string, idade: number, cnh: string, cpf: string);
    getCpf(): string;
    getCnh(): string;
    hashCode(): number;
    equals(outraPessoa: PessoaFisica): boolean;
}
declare class PessoaJuridica extends Pessoa1 {
    private cnpj;
    private razaoSocial;
    constructor(nome: string, idade: number, cnpj: string, razaoSocial: string);
    getCnpj(): string;
    getRazaoSocial(): string;
    setRazaoSocial(razaoSocial: string): void;
}
declare let pessoaFisica1: PessoaFisica;
declare let pessoaFisica2: PessoaFisica;
declare let pessoaFisica3: PessoaFisica;
declare let pessoaJuridica1: PessoaJuridica;
declare let pessoaJuridica2: PessoaJuridica;
