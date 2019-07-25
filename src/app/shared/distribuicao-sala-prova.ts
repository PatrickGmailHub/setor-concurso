import { Inscricao } from './inscricao';
import { DefinicaoSalaProva } from './definicao-sala-prova';

export class DistribuicaoSalaProva {
    constructor(
        public id?: number,
        public ordemSalaProva?: number,
        public presenca?: boolean,
        public definicaoSalaProva?: DefinicaoSalaProva,
        public inscricao?: Inscricao
    ){}
}
