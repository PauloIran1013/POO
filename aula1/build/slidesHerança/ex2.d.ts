declare class Animais {
    peso: number;
    idade: number;
    sexo: string;
    constructor(peso: number, idade: number, sexo: string);
    Aniversario(): void;
}
declare class Peixe extends Animais {
    escamas: boolean;
    constructor(peso: number, idade: number, sexo: string, escamas: boolean);
    movimentar(): void;
    comer(): void;
}
declare class Cachorro extends Animais {
    nome: string;
    pedigree: boolean;
    constructor(nome: string, idade: number, sexo: string, pedigree: boolean, peso: number);
    latir(): void;
    comer(): void;
    movimentar(): void;
}
declare class Gato extends Animais {
    nome: string;
    pedigree: boolean;
    constructor(nome: string, idade: number, sexo: string, pedigree: boolean, peso: number);
    Miar(): void;
    comer(): void;
    movimentar(): void;
}
declare class Gamba extends Animais {
    nivelAroma: number;
    constructor(peso: number, idade: number, sexo: string, nivelAroma: number);
    aromatizar(): void;
    comer(): void;
    movimentar(): void;
}
declare let peixe: Peixe;
declare let cachorro1: Cachorro;
declare let gato: Gato;
declare let gamba: Gamba;
