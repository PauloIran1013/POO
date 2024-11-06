class Carros {
    marca: string;
    modelo: string;
    potencia: number;
    numeroMarcha: number;
    marchaAtual: number;
    velocidade: number;
  
    constructor(
      marca: string,
      modelo: string,
      potencia: number,
      numeroMarcha: number,
      marchaAtual: number,
      velocidade: number
    ) {
      this.marca = marca;
      this.modelo = modelo;
      this.potencia = potencia;
      this.numeroMarcha = numeroMarcha;
      this.marchaAtual = marchaAtual;
      this.velocidade = velocidade;
    }
  
    exibirDados(): void {
      console.log(`Marca: ${this.marca};
  Modelo: ${this.modelo};
  Potência: hp ${this.potencia};
  Número de marchas: ${this.numeroMarcha};
  Marcha atual: ${this.marchaAtual};
  Velocidade: Km/h${this.velocidade}`);
    }

andar():void{
  if (this.velocidade >= 1) {
    console.log('O carro está em movimento');
    
  }else{
    console.log('O carro está parado');
  }
}
classificacao():void{
  if (this.potencia <= 100) {
    console.log('O carro é um carro urbano');
    
  }else  {
    console.log("O carro é potente");
    
  }
}
  }
  

  const lambo = new Carros('Lamborghini', 'Huracán', 640, 7, 3, 150);
  lambo.exibirDados();
  lambo.andar()
  lambo.classificacao()