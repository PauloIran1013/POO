class Dog{
    raca:string;
    nome:string;
    porte:string;
    pedigree:boolean;
    sexo:string;
    peso:string;
    dataNasc:string

    constructor( raca:string,
        nome:string,
        porte:string,
        pedigree:boolean,
        sexo:string,
        peso:string,
        dataNasc:string){
            this.raca = raca
            this.nome = nome
            this.porte = porte
            this.pedigree = pedigree
            this.sexo = sexo
            this.peso = peso
            this.dataNasc = dataNasc
        }

exibirInfo():void{
    console.log(`Raça: ${this.raca}`);
    console.log(`Nome: ${ this.nome}`);
    console.log(`Porte: ${this.porte} `);
    console.log(`Pedigree: ${this.pedigree}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso} kg`);
    console.log(`Data de nascimento: ${this.dataNasc}`);
}

LevantaPerna():void{
    if (this.sexo === "masculino") {
    console.log('Levanta a perna');
    }else{
        console.log('Não levanta a perna'); 
    }
}
}

const cachorro = new Dog ('Vira-lata','Clóvis','médio',false,'masculino','7,03',"10/01/2024")
cachorro.exibirInfo();
cachorro.LevantaPerna()