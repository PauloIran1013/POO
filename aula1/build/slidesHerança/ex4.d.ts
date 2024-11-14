declare class GenericModel {
    id: number;
    name: string;
    constructor(id: number, name: string);
}
declare class conteudo extends GenericModel {
    url: string;
    constructor(id: number, name: string, url: string);
}
declare class Unidade extends GenericModel {
    ativo: boolean;
    constructor(id: number, name: string, ativo: boolean);
}
declare class aula extends GenericModel {
    conteudo: conteudo;
    unidade: Unidade;
    constructor(id: number, name: string, conteudo: conteudo, unidade: Unidade);
}
declare class aulaConteudo extends GenericModel {
    aula: aula;
    conteudo: conteudo;
    constructor(id: number, name: string, aula: aula, conteudo: conteudo);
}
