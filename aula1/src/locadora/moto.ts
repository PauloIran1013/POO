import { Veiculos } from "./veiculo";

export class Moto extends Veiculos {
    private cilindradas: number;
    private bagageiro: boolean;

    constructor(marca: string,modelo: string,ano: number,ValorLocacao:number,cilindradas:number,bagageiro:boolean){
        super(marca,modelo,ano,ValorLocacao);
        this.cilindradas = cilindradas;
        this.bagageiro = bagageiro;
    }

    public getCilindradas(): number {
        return this.cilindradas;
    }

    
    public setCilindradas(cilindradas: number) {
        if (cilindradas>0) {
        return this.cilindradas    
        }else{
            console.log("Cilindradas não podem ser menores ou iguais a zero.");
        }
    }
    
    public getBagageiro(): boolean {
        return this.bagageiro;
    }
public exibirInfo(): void {
    console.log(`Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano: ${this.ano} \n Valor Locação: ${this.ValorLocacao} \n Tem Bagageiro: ${this.bagageiro} \n Cilindradas: ${this.cilindradas}`)
}

public calcularAutonomia(consumo: number){
    const consumoCalculo = consumo * this.cilindradas/100
    console.log(`A autonomia da moto é de ${consumoCalculo} km`)
}

    
}

const moto1 = new Moto("Honda", "CB 500", 2021, 50.0, 500, true);
moto1.exibirInfo();
moto1.calcularAutonomia(10);