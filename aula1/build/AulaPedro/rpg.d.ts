export declare class Personagem {
    private nome;
    private vida;
    protected forca: number;
    private defesa;
    private magia;
    constructor(nome: string, vida: number, forca: number, defesa: number, magia: number);
    getNome(): string;
    getVida(): number;
    setVida(novaVida: number): void;
    getForca(): number;
    getDefesa(): number;
    getMagia(): number;
    receberDano(dano: number): string;
}
