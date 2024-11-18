import { Loja } from "./loja";

export class Eletronicos extends Loja {
   private voltagem:number

    constructor(nome:string, preco:number, estoque:number, voltagem:number){
        super(nome,preco,estoque);
        this.voltagem = voltagem
    }

    
    public getVoltagem() : number {
        return this.voltagem
    }

    exibirInfo():void{
        console.log(`Nome: ${this.nome}, Preco: R$ ${this.preco}, Estoque: ${this.estoque}, voltagem ${this.voltagem}`)
    }
    
}

const eletronico1 = new Eletronicos('Notebook', 2000, 10, 220)
eletronico1.exibirInfo()
eletronico1.attEstoque();
