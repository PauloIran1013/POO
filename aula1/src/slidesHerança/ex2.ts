
class Animais {
    peso: number;
    idade: number;
    sexo: string;

    constructor(peso: number, idade: number, sexo: string) {
        this.peso = peso;
        this.sexo = sexo;
        this.idade = idade;
    }

    Aniversario(): void {
        this.idade += 1;
        console.log(`Agora a idade é: ${this.idade} anos`);
    }
}

class Peixe extends Animais {
    escamas: boolean;

    constructor(peso: number, idade: number, sexo: string, escamas: boolean) {
        super(peso, idade, sexo);
        this.escamas = escamas;
    }

    movimentar(): void {
        console.log("O peixe está nadando");
    }

    comer(): void {
        this.peso *= 1.05; 
        console.log(`Peso do peixe após a refeição: ${this.peso.toFixed(2)}Kg`);
    }
}

class Cachorro extends Animais {
    nome: string;
    pedigree: boolean;

    constructor(nome: string, idade: number, sexo: string, pedigree: boolean, peso: number) {
        super(peso, idade, sexo);
        this.nome = nome;
        this.pedigree = pedigree;
    }

    latir(): void {
        console.log("AU AU AU AU AU AU AU AU AU AU!!!");
    }

    comer(): void {
        this.peso *= 1.10;  
        console.log(`Peso do ${this.nome} após a refeição: ${this.peso.toFixed(2)}Kg`);
    }

    movimentar(): void {
        console.log("O cachorro está correndo");
    }
}

class Gato extends Animais {
    nome: string;
    pedigree: boolean;

    constructor(nome: string, idade: number, sexo: string, pedigree: boolean, peso: number) {
        super(peso, idade, sexo);
        this.nome = nome;
        this.pedigree = pedigree;
    }

    Miar(): void {
        console.log("Miauuuuu!");
    }

    comer(): void {
        this.peso *= 1.05;  // Aumenta o peso em 5%
        console.log(`Peso do ${this.nome} após a refeição: ${this.peso.toFixed(2)}Kg`);
    }

    movimentar(): void {
        console.log("O gato está praticando parkour");
    }
}

class Gamba extends Animais {
    nivelAroma: number;

    constructor(peso: number, idade: number, sexo: string, nivelAroma: number) {
        super(peso, idade, sexo);
        this.nivelAroma = nivelAroma;
    }

    aromatizar(): void {
        console.log("Hummm, que cheirinho bom");
    }

    comer(): void {
        this.peso *= 1.05;  // Aumenta o peso em 5%
        console.log(`Peso do gambá após a refeição: ${this.peso.toFixed(2)}kg`);
    }

    movimentar(): void {
        console.log("O gambá está se movendo, liberando um aroma.");
    }
}

// Criando instâncias dos objetos

// Peixe
let peixe = new Peixe(2.5, 3, "Fêmea", true);
peixe.movimentar();  // O peixe está nadando
peixe.comer();       // Peso do peixe após a refeição
peixe.Aniversario(); // Agora a idade é: 4 anos

// Cachorro
let cachorro1 = new Cachorro("Rex", 5, "Macho", true, 10);
cachorro1.movimentar();  // O cachorro está correndo
cachorro1.latir();       // AU AU AU AU AU AU AU AU AU AU!!!
cachorro1.comer();       // Peso do Rex após a refeição
cachorro1.Aniversario(); // Agora a idade é: 6 anos

// Gato
let gato = new Gato("Mia", 2, "Fêmea", true, 3.2);
gato.movimentar();      // O gato está praticando parkour
gato.Miar();            // Miauuuuu!
gato.comer();           // Peso do Mia após a refeição
gato.Aniversario();     // Agora a idade é: 3 anos

// Gambá
let gamba = new Gamba(5, 4, "Macho", 8);
gamba.movimentar();     // O gambá está se movendo, liberando um aroma.
gamba.aromatizar();     // Hummm, que cheirinho bom
gamba.comer();          // Peso do gambá após a refeição
gamba.Aniversario();    // Agora a idade é: 5 anos
