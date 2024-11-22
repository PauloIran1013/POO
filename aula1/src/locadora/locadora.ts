import { Veiculos } from "./veiculo";
import { Carro } from "./carro";
import { Moto } from "./moto";
import { Caminhao } from "./caminhao";

// export class Locadora{
//     private veiculo:Veiculos[]= [];

    
//     public getVeiculo():Veiculos[]  {
//         return this.veiculo 
//     }
    
//     public setVeiculo(veiculo:Veiculos[]) {
//         this.veiculo = veiculo
//     }

//     public addVeiculo(veiculos:Veiculos){
//         this.veiculo.push(veiculos)
//     }
//     public removeVeiculo(modelo:string):void{
//         this.veiculo = this.veiculo.filter(veiculo => veiculo.modelo !== modelo)
//     }
//     exibirVeiculos(): void {
//         console.log("Lista de Veículos:");
//         this.veiculo.forEach(veiculo => veiculo.exibirInfo());
//     }
//     buscarVeiculoPorMarca(marca: string): Veiculos[] {
//         return this.veiculo.filter(veiculo => veiculo.marca === marca);
//     }
    
    
// }


export class Locadora {
    private veiculo: Veiculos[] = [];

    // Getter e Setter para o array de veículos
    public getVeiculo(): Veiculos[] {
        return this.veiculo;
    }

    public setVeiculo(veiculo: Veiculos[]): void {
        this.veiculo = veiculo;
    }

    // Método para adicionar veículos
    public addVeiculo(veiculo: Veiculos): void {
        this.veiculo.push(veiculo);
    }

    // Método para remover veículo pelo modelo
    public removeVeiculo(modelo: string): void {
        this.veiculo = this.veiculo.filter(veiculo => veiculo.getModelo() !== modelo);
    }

    // Exibir todos os veículos
    public exibirVeiculos(): void {
        console.log("Lista de Veículos:");
        this.veiculo.forEach(veiculo => veiculo.exibirInfo());
    }

    // Buscar veículos por marca
    public buscarVeiculoPorMarca(marca: string): Veiculos[] {
        return this.veiculo.filter(veiculo => veiculo.getMarca() === marca);
    }
}

function main() {
    // Criando a instância da Locadora
    const locadora = new Locadora();

    // Criando instâncias de veículos
    const carro1 = new Carro("Fiat", "Palio", 2020, 100.0, 4, "Gasolina");
    const carro2 = new Carro("Volkswagen", "Gol", 2019, 120.0, 4, "Flex");

    // Adicionando veículos à locadora
    locadora.addVeiculo(carro1);
    locadora.addVeiculo(carro2);

    // Exibindo todos os veículos
    locadora.exibirVeiculos();

    // Buscando veículos da marca 'Volkswagen'
    console.log("\nBuscando veículos da marca 'Volkswagen':");
    const veiculosVolkswagen = locadora.buscarVeiculoPorMarca("Volkswagen");
    veiculosVolkswagen.forEach(veiculo => veiculo.exibirInfo());
}

// Executando o código
main();