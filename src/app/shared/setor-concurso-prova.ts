import { LocalDeProva } from './local-de-prova';
import { Setor } from './setor';
import { Concurso } from 'src/app/shared/concurso';
import { EtapaProva } from 'src/app/shared/etapa-prova';

export class SetorConcursoProva {

    constructor(
        id?: number,
        qtdSalaProva?: number,
        qtdCarteiraSala?: number,
        salaInicio?: number,
        setor?: Setor,
        concurso?: Concurso,
        etapaProva?: EtapaProva,
        localDeProva?: LocalDeProva
    ) {}

}
