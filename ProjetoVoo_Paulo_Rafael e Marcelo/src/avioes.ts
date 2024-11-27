import { Piloto } from "./piloto";

export class Avioes extends Piloto{
    modelo:string;
    marca:string;
    numAssentos:number;
    qtdTotaldecombustivel:number
    qtdNoTanque:number
constructor(modelo:string,marca:string,numAssentos:number,nome:string,email:string,cpf:string,ocupacao: 'Piloto',breve:number, anosExperiencia:number,avaliacao:number,qtdTotaldecombustivel:number,qtdNoTanque:number){
    super(nome,email,cpf,ocupacao,breve,anosExperiencia,avaliacao),
    this.modelo=modelo,
    this.marca=marca,
    this.numAssentos=numAssentos,
    this.qtdTotaldecombustivel=qtdTotaldecombustivel,
    this.qtdNoTanque = qtdNoTanque
    }

    public exibirInfo(): void {
        super.exibirInfo(); 
        console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Número de Assentos: ${this.numAssentos}, Capacidade De Combustível: ${this.qtdTotaldecombustivel}L, Quantidade de combustível no tanque:${this.qtdNoTanque}`);
    }

    public abastecer(QtdDeLitros:number):void{
    if (QtdDeLitros<=0) {
        console.log("Quantidade de combustivel inválida!");
        
    }else{
        this.qtdNoTanque += QtdDeLitros
        console.log(`Avião abastecido com sucesso!`);
        console.log(`Quantidade de combustívell atual: ${this.qtdNoTanque}`);
        
        
    }
    }

    public voar(){
        console.log(`O avião ${this.modelo} está voando ✈ !`);
    }
    public pousar(){
        console.log(`O avião ${this.modelo} está pousando ✈ !`)
    }    

}


