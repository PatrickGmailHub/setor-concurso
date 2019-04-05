import { LocalDeProva } from './local-de-prova';

export class Setor {

    constructor(
        public id?: number,
        public nome?: string,
        public endereco?: string,
        public bairro?: string,
        public localDeProva?: LocalDeProva,
        public cep?: string,
        public qtd_sala?: number,
        public nome_responsavel?: string,
        public celular_responsavel?: string,
        public email_responsavel?: string,        
        public latitude?: string,        
        public longitude?: string      
        
        // public userId?: number,
        // public id?: number,
        // public title?: string,
        // public body?: string

    ){}

}
