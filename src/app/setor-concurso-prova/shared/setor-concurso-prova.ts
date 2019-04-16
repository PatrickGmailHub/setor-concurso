import { LocalDeProva } from '../../setor/shared/local-de-prova';
import { Setor } from '../../setor/shared/setor';
import { Concurso } from 'src/app/shared/services/concurso';
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
