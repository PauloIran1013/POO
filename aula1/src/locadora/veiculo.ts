export abstract class Veiculos{
    protected marca: string;
    protected modelo: string;
    protected ano: number;
    protected ValorLocacao:number;

    constructor(  marca: string,
         modelo: string,
         ano: number,
         ValorLocacao:number){
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
            this.ValorLocacao = ValorLocacao;
            
        }
//getters e seters
    public getMarca(): string {
    return this.marca
    }
    public setMarca(marca: string) {
    this.marca = marca;
    }
    public getModelo(): string {
    return this.modelo
        }
    public setModelo(modelo: string) {
        this.modelo = modelo;
    }
    public getAno() {
        return this.ano
    }
    public setAno(ano: number) {
            this.ano = ano;
    }
    public getValorLocacao():number {
        return this.ValorLocacao
    }
    
    public setValorLocacao(valor : number) {
        if (valor<0) {
             this.ValorLocacao = valor
        }else{
            console.log('Valor inválido');
            
        }
    }

    public abstract exibirInfo():void
}   

    

