import { Piloto } from "./piloto";

export class Avioes extends Piloto{
    modelo:string;
    marca:string;
    numAssentos:number;
    qtdTotaldecombustivel:number
constructor(modelo:string,marca:string,numAssentos:number,nome:string,email:string,cpf:string,ocupacao: 'Piloto',breve:number, anosExperiencia:number,avaliacao:number,qtdTotaldecombustivel:number){
    super(nome,email,cpf,ocupacao,breve,anosExperiencia,avaliacao),
    this.modelo=modelo,
    this.marca=marca,
    this.numAssentos=numAssentos,
    this.qtdTotaldecombustivel=qtdTotaldecombustivel
    }

    public exibirInfo(): void {
        super.exibirInfo(); 
        console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Número de Assentos: ${this.numAssentos}, Capacidade De Combustível: ${this.qtdTotaldecombustivel}L`);
    }

    public voar(){
        console.log(`O avião ${this.modelo} está voando ✈ !`);
    }
    public pousar(){
        console.log(`O avião ${this.modelo} está pousando ✈ !`)
    }    

}

const aviao1 = new Avioes('Airbus A320','Airbus', 180, 'João Oliveira','joao.oliveira@example.com','987.654.321-00','Piloto',54321,12,9,500);
aviao1.exibirInfo();
aviao1.voar();  
aviao1.pousar(); 
