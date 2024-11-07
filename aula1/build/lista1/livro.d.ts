declare class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    private disponivel;
    constructor(titulo: string, autor: string, anoPublicacao: number, disponivel: boolean);
    emprestar(): void;
    devolver(): void;
    exibirInformacoes(): void;
}
declare const livro: Livro;
