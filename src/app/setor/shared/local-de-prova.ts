
export class LocalDeProva {

    constructor(public id?: number, public nome?: string) {}

    public equals(obj: LocalDeProva) : boolean { 
        return this.id == obj.id;
    } 
}