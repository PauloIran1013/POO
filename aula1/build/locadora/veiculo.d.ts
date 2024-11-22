export declare abstract class Veiculos {
    protected marca: string;
    protected modelo: string;
    protected ano: number;
    protected ValorLocacao: number;
    constructor(marca: string, modelo: string, ano: number, ValorLocacao: number);
    getMarca(): string;
    setMarca(marca: string): void;
    getModelo(): string;
    setModelo(modelo: string): void;
    getAno(): number;
    setAno(ano: number): void;
    getValorLocacao(): number;
    setValorLocacao(valor: number): void;
    abstract exibirInfo(): void;
}
