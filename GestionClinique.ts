import { Medecin } from './Medecin';
import { Patient } from './Patient';
import { Rendezvous } from './Rendezvous';

class GestionClinique {
    private patients: Patient[] = [];
    private medecins: Medecin[] = [];
    private rendezvousList: Rendezvous[] = [];

    public ajouterPatient(nom: string, prenom: string , date_naissance:Date, adresse:string): Patient {
        const patient = new Patient(nom, prenom,date_naissance,adresse);
        this.patients.push(patient);
        return patient;
    }

    public ajouterMedecin(nom: string, prenom: string, specialite:string): Medecin {
        const medecin = new Medecin(nom, prenom, specialite);
        this.medecins.push(medecin);
        return medecin;
    }

    public ajouterRendezvous(date: Date, statut: string, patientId: number, medecinId: number): Rendezvous | null {
        const patient = this.patients.find(p => p.id === patientId);
        const medecin = this.medecins.find(m => m.id === medecinId);
        
        if (!patient || !medecin) {
            console.error("Patient ou Médecin non trouvé");
            return null;
        }

        const rendezvous = new Rendezvous(date, statut, patientId, medecinId);
        this.rendezvousList.push(rendezvous);
        return rendezvous;
    }

    public listerRendezvous(): void {
        if (this.rendezvousList.length === 0) {
            console.log("Aucun rendez-vous trouvé.");
        } else {
            this.rendezvousList.forEach(rdv => {
                console.log(rdv.toString(this.patients, this.medecins));
            });
        }
    }


     afficherPatients() {
        console.log("Liste des patients :");
        this.patients.forEach(patient => {
            console.log(`ID: ${patient.id}, Nom: ${patient.nom}, Prénom: ${patient.prenom}, Date de naissance: ${patient.date_naissance.toLocaleDateString()},Adresse: ${patient.adresse}`);
        });
    }

    afficherMedecins() {
        console.log("Liste des médecins :");
        this.medecins.forEach(medecin => {
            console.log(`ID: ${medecin.id}, Nom: ${medecin.nom}, Prénom: ${medecin.prenom}, Spécialité: ${medecin.specialite}`);
        });
    }

    public afficherRendezvous(): void {
        if (this.rendezvousList.length === 0) {
            console.log("Aucun rendez-vous trouvé.");
        } else {
            this.rendezvousList.forEach(rdv => {
                console.log(rdv.toString(this.patients, this.medecins)); // Passer les listes ici
            });
        }
    }
    
}

const clinique = new GestionClinique();

// Ajout de patients
const patient1 = clinique.ajouterPatient("Niass", "Awa", new Date("1990-05-15"),"Dakar");
const patient2 = clinique.ajouterPatient("diouf", "Anne",new Date("1990-05-15"),"Thies");

// Ajout de médecins
const medecin1 = clinique.ajouterMedecin("seck", "pape","cardiologue");
const medecin2 = clinique.ajouterMedecin("Durand", "Sophie","radiologue");

// Création de rendez-vous
clinique.ajouterRendezvous(new Date("1990-05-15"), "Confirmé", patient1.id, medecin1.id);
clinique.ajouterRendezvous(new Date("1990-05-15"), "En attente", patient2.id, medecin2.id);

// Liste des rendez-vous
clinique.listerRendezvous();

clinique.afficherPatients();
clinique.afficherMedecins();
clinique.afficherRendezvous();

