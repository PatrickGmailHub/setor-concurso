export class Concurso {

    constructor(
        public id_concurso?: number,
        public ano?: number,
        public descricao?: string,
        public nome?: string,
        public status?: boolean,
        public url_edital?: string,
        public id_tipo_concurso?: number,
        public id_unidade?: number,
        public observacoes?: string,
        public informacoes?: string,
        public url_resultado?: string,
        public taxa_unica?: number

    ){}
}
