import { Medecin } from './Medecin';
import { Patient } from './Patient';
export class Rendezvous{
    private static idCounter = 1;
    public id: number;
    public date: Date;
    public statut: string;
    patientId: number; 
    medecinId: number;

    constructor(date: Date, statut: string, patientId: number, medecinId: number) {
        this.id = Rendezvous.idCounter++;
        this.date=date;
        this.statut = statut;
        this.patientId = patientId;
        this.medecinId = medecinId;
    }

    public toString(patients: Patient[], medecins: Medecin[]): string {
        const patient = patients.find(p => p.id === this.patientId);
        const medecin = medecins.find(m => m.id === this.medecinId);

        const patientFullName = patient ? patient.getFullName() : "Patient non enregistré";
        const medecinFullName = medecin ? medecin.getFullName() : "Médecin non enregistré";

        return `Rendez-vous #${this.id}: ${this.date.toLocaleDateString()} avec le patient ${patientFullName} et le médecin ${medecinFullName}`;
        
    }
    
}
