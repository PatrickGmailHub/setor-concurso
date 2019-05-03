import { TipoConcurso } from './tipo-concurso';

export class Concurso {

    constructor(
        // public id_tipo_concurso?: number,
        public id?: number,
        public tipoConcurso?: TipoConcurso,
        public nome?: string,
        public descricao?: string,
        public ano?: number,
        public status?: boolean,
        public urlEdital?: string,
        public unidade?: number,
        public observacoes?: string,
        public informacoes?: string,
        public urlResultado?: string,
        public taxaUnica?: number

    ){}
}
