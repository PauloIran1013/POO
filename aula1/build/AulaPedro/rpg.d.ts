export declare class Personagem {
    protected nome: string;
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
    setDefesa(novaDefesa: number): void;
    AumentoDefesaM(defesaNova: number): void;
    getMagia(): number;
    exibirInfo(): void;
    receberDano(dano: number): string;
    atacar(): string;
}
