import { Setor } from './setor';
import { Concurso } from 'src/app/shared/concurso';
import { EtapaProva } from 'src/app/shared/etapa-prova';

export class SetorConcursoProva {

    constructor(
        public id?: number,
        public qtdSalaProva?: number,
        public qtdCarteiraSala?: number,
        public salaInicio?: number,
        public setor?: Setor,
        public concurso?: Concurso,
        public etapaProva?: EtapaProva,
    ) {}

}
