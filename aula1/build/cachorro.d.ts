declare class Dog {
    raca: string;
    nome: string;
    porte: string;
    pedigree: boolean;
    sexo: string;
    peso: string;
    dataNasc: string;
    constructor(raca: string, nome: string, porte: string, pedigree: boolean, sexo: string, peso: string, dataNasc: string);
    exibirInfo(): void;
    LevantaPerna(): void;
}
declare const cachorro: Dog;
