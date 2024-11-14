"use strict";
class GenericModel {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class conteudo extends GenericModel {
    url;
    constructor(id, name, url) {
        super(id, name);
        this.url = url;
    }
}
class Unidade extends GenericModel {
    ativo;
    constructor(id, name, ativo) {
        super(id, name);
        this.ativo = ativo;
    }
}
class aula extends GenericModel {
    conteudo;
    unidade;
    constructor(id, name, conteudo, unidade) {
        super(id, name);
        this.conteudo = conteudo;
        this.unidade = unidade;
    }
}
class aulaConteudo extends GenericModel {
    aula;
    conteudo;
    constructor(id, name, aula, conteudo) {
        super(id, name);
        this.conteudo = conteudo;
        this.aula = aula;
    }
}
