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
        console.log(`Quantidade de combustível atual: ${this.qtdNoTanque}`);
        
        
    }
    }

    public voar(){
        console.log(`O avião ${this.modelo} está voando ✈ !`);
    }
    public pousar(){
        console.log(`O avião ${this.modelo} está pousando ✈ !`)
    }    

}



// Criando o objeto Avioes
const aviao = new Avioes(
    "Boeing 737",  // modelo do avião
    "Boeing",      // marca do avião
    180,           // número de assentos
    "João Silva",  // nome do piloto
    "joao@email.com", // email do piloto
    "12345678900",  // CPF do piloto
    "Piloto",       // ocupação do piloto
    12345,          // número do breve do piloto
    15,             // anos de experiência do piloto
    9,              // avaliação do piloto (de 0 a 10)
    50000,          // quantidade total de combustível (em litros)
    25000           // quantidade de combustível no tanque (em litros)
);

// Exibindo as informações do avião
aviao.exibirInfo();

// Abastecendo o avião com 5000 litros
aviao.abastecer(5000);

// O avião vai voar e pousar
aviao.voar();
aviao.pousar();
