"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Medecin_1 = require("./Medecin");
var Patient_1 = require("./Patient");
var Rendezvous_1 = require("./Rendezvous");
var GestionClinique = /** @class */ (function () {
    function GestionClinique() {
        this.patients = [];
        this.medecins = [];
        this.rendezvousList = [];
    }
    GestionClinique.prototype.ajouterPatient = function (nom, prenom, date_naissance, adresse) {
        var patient = new Patient_1.Patient(nom, prenom, date_naissance, adresse);
        this.patients.push(patient);
        return patient;
    };
    GestionClinique.prototype.ajouterMedecin = function (nom, prenom, specialite) {
        var medecin = new Medecin_1.Medecin(nom, prenom, specialite);
        this.medecins.push(medecin);
        return medecin;
    };
    GestionClinique.prototype.ajouterRendezvous = function (date, statut, patientId, medecinId) {
        var patient = this.patients.find(function (p) { return p.id === patientId; });
        var medecin = this.medecins.find(function (m) { return m.id === medecinId; });
        if (!patient || !medecin) {
            console.error("Patient ou Médecin non trouvé");
            return null;
        }
        var rendezvous = new Rendezvous_1.Rendezvous(date, statut, patientId, medecinId);
        this.rendezvousList.push(rendezvous);
        return rendezvous;
    };
    GestionClinique.prototype.listerRendezvous = function () {
        var _this = this;
        if (this.rendezvousList.length === 0) {
            console.log("Aucun rendez-vous trouvé.");
        }
        else {
            this.rendezvousList.forEach(function (rdv) {
                console.log(rdv.toString(_this.patients, _this.medecins));
            });
        }
    };
    GestionClinique.prototype.afficherPatients = function () {
        console.log("Liste des patients :");
        this.patients.forEach(function (patient) {
            console.log("ID: ".concat(patient.id, ", Nom: ").concat(patient.nom, ", Pr\u00E9nom: ").concat(patient.prenom, ", Date de naissance: ").concat(patient.date_naissance.toLocaleDateString(), ",Adresse: ").concat(patient.adresse));
        });
    };
    GestionClinique.prototype.afficherMedecins = function () {
        console.log("Liste des médecins :");
        this.medecins.forEach(function (medecin) {
            console.log("ID: ".concat(medecin.id, ", Nom: ").concat(medecin.nom, ", Pr\u00E9nom: ").concat(medecin.prenom, ", Sp\u00E9cialit\u00E9: ").concat(medecin.specialite));
        });
    };
    GestionClinique.prototype.afficherRendezvous = function () {
        var _this = this;
        if (this.rendezvousList.length === 0) {
            console.log("Aucun rendez-vous trouvé.");
        }
        else {
            this.rendezvousList.forEach(function (rdv) {
                console.log(rdv.toString(_this.patients, _this.medecins)); // Passer les listes ici
            });
        }
    };
    return GestionClinique;
}());
var clinique = new GestionClinique();
// Ajout de patients
var patient1 = clinique.ajouterPatient("Niass", "Awa", new Date("1990-05-15"), "Dakar");
var patient2 = clinique.ajouterPatient("diouf", "Anne", new Date("1990-05-15"), "Thies");
// Ajout de médecins
var medecin1 = clinique.ajouterMedecin("seck", "pape", "cardiologue");
var medecin2 = clinique.ajouterMedecin("Durand", "Sophie", "radiologue");
// Création de rendez-vous
clinique.ajouterRendezvous(new Date("1990-05-15"), "Confirmé", patient1.id, medecin1.id);
clinique.ajouterRendezvous(new Date("1990-05-15"), "En attente", patient2.id, medecin2.id);
// Liste des rendez-vous
clinique.listerRendezvous();
clinique.afficherPatients();
clinique.afficherMedecins();
clinique.afficherRendezvous();
