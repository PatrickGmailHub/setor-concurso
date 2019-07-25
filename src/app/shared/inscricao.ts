export class Inscricao {
    constructor(
        public id?: number,
        public pessoa?: string,
        public pagamentoEfetuato?: boolean,
        public isento?: boolean,
        public necessitaTratamentoDiferenciado?: boolean,
        public numeroInscricao?: string,
        public status?: boolean,
    ){}
}
