class   GenericModel{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id = id
        this.name = name
    }

}
class conteudo extends GenericModel{
    url:string
    constructor(id:number,name:string,url:string){
        super(id,name)
        this.url = url
    }

}
class Unidade extends GenericModel{
    ativo:boolean;
    constructor(id:number,name:string,ativo:boolean){
        super(id,name)
        this.ativo = ativo}
        
    }

class aula extends GenericModel{
    conteudo:conteudo;
    unidade:Unidade;
    constructor(id:number,name:string,conteudo:conteudo,unidade:Unidade){
        super(id,name)
        this.conteudo = conteudo
         this.unidade = unidade
    }
}

class aulaConteudo extends GenericModel{
    aula:aula;
    conteudo:conteudo;
    constructor(id:number,name:string,aula:aula,conteudo:conteudo){
        super(id,name)
        this.conteudo = conteudo
        this.aula = aula
    }
}

