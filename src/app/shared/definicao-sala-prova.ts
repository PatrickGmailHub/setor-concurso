import { SetorConcursoProva } from './setor-concurso-prova';

export class DefinicaoSalaProva {

    constructor(
        public id?: number,
        public setorConcursoProva?: SetorConcursoProva,
        public qtdCarteira?: number,
        public utilizada?: boolean,
        public numeroSala?: number
    ){}

}
