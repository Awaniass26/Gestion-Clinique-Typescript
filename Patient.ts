export class Patient{
    private static idCounter=1;
    public id: number;
    public nom: string;
    public prenom:string;
    public date_naissance:Date;
    public adresse: string;

    constructor(nom: string,prenom:string,date_naissance:Date,adresse:string) {
        this.id=Patient.idCounter++;
        this.nom = nom;
        this.prenom=prenom;
        this.date_naissance=date_naissance;
        this.adresse=adresse;
    }

    public getFullName(): string {
        return `${this.prenom}`;
    }

    

    public getAge(): number {
        const today = new Date();
        let age = today.getFullYear() - this.date_naissance.getFullYear();
        const monthDiff = today.getMonth() - this.date_naissance.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.date_naissance.getDate())) {
            age--;
        }
        return age;
    }


}