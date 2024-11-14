declare enum Status {
    INATIVO = "inativo",
    ATIVO = "ativo"
}
declare class Usuarios {
    senha: string;
    nome: string;
    status: Status;
    ultimoAcesso: string;
    constructor(senha: string, nome: string, status: Status, ultimoAcesso: string);
    exibirinfo(): void;
}
declare class Clientes extends Usuarios {
    cpf: string;
    constructor(senha: string, nome: string, status: Status, ultimoAcesso: string, cpf: string);
    exibirInfoC(): void;
}
declare class Funcionarios extends Usuarios {
    dataAdmissao: string;
    constructor(senha: string, nome: string, status: Status, ultimoAcesso: string, dataAdmissao: string);
    exibirinfoF(): void;
    DesativarFuncionario(): void;
    InativarFornecedor(fornecedor: Fornecedor): void;
    ativarFornecedor(fornecedor: Fornecedor): void;
}
declare class Fornecedor extends Usuarios {
    cnpj: string;
    constructor(senha: string, nome: string, status: Status, ultimoAcesso: string, cnpj: string);
    exibirinfo(): void;
}
declare const cliente1: Clientes;
declare const funcionario1: Funcionarios;
declare const fornecedor1: Fornecedor;
