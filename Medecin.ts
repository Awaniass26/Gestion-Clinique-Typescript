export class Medecin{
    private static idCounter = 1;
    public id: number;
    public nom: string;
    public prenom:string;
    public specialite: string;

    constructor(nom: string,prenom:string,specialite:string) {
        this.id=Medecin.idCounter++
        this.nom = nom;
        this.prenom=prenom;
        this.specialite=specialite;
    }

    public getFullName(): string {
        return `${this.prenom} ${this.nom}`;
    }
}