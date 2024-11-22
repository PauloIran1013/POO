import { Veiculos } from "./veiculo";

export class Carro extends Veiculos {
    private numeroPortas:number;
    private tipoCombustivel:string;

 constructor(marca: string,modelo: string,ano: number,ValorLocacao:number, numeroPortas:number,tipoCombustivel:string){
    super(marca,modelo,ano,ValorLocacao);
    this.numeroPortas = numeroPortas;
    this.tipoCombustivel = tipoCombustivel
 }   

 public exibirInfo(){
    console.log(`Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano: ${this.ano} \n Valor Locação: ${this.ValorLocacao} \n Número de portas ${this.numeroPortas} \n Tipo de combustivél ${this.tipoCombustivel}`)
}   


public getNumeroPortas (): number{
    return  this.numeroPortas
}

public setNumeroPortas(numeroPortas:number)  {
    if (numeroPortas>0) {
        return this.numeroPortas
    }else{
        console.log("Número de portas inválido")
    }
}

public getTipoCombustivel():string{
    return this.tipoCombustivel
}


public setTipoCombustivel(tipoCombustivel: string) {
    this.tipoCombustivel = tipoCombustivel;
}


public CalcularDesconto(desconto:number){
    const ValorDesconto = this.ValorLocacao *(desconto/100)
    const ValorFinal = this.ValorLocacao - ValorDesconto
    console.log(`Valor final ${ValorFinal}`);
    
}
}
const carro1 = new Carro("Fiat", "Palio", 2020, 100.0, 4, "Gasolina");
carro1.exibirInfo();
carro1.CalcularDesconto(10);