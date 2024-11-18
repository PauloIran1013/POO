import { Loja } from "./loja";

export class Alimento extends Loja {
 protected dataVencimento:string

 constructor(nome:string,preco:number,estoque:number, dataVencimento:string) {
    super(nome, preco, estoque)
    this.dataVencimento = dataVencimento
 }

 
 public getDataVencimento() : string {
    return this.dataVencimento
 }

 exibirInfo():void{
    console.log(`Nome: ${this.nome}, Preco: R$ ${this.preco}, Estoque: ${this.estoque}, Data de vencimento ${this.dataVencimento}`)
}
 
}

const alimento1 = new Alimento('Arroz', 11, 100, '2027-10-11')
alimento1.exibirInfo()
alimento1.attEstoque()
