import { Inscricao } from './inscricao';
import { DefinicaoSalaProva } from './definicao-sala-prova';

export class DistribuicaoSalaProva {
    constructor(
        id?: number,
        ordemSalaProva?: number,
        presenca?: boolean,
        definicaoSalaProva?: DefinicaoSalaProva,
        inscricao?: Inscricao
    ){}
}
