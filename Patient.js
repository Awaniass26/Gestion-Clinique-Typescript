"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(nom, prenom, date_naissance, adresse) {
        this.id = Patient.idCounter++;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.adresse = adresse;
    }
    Patient.prototype.getFullName = function () {
        return "".concat(this.prenom);
    };
    Patient.prototype.getAge = function () {
        var today = new Date();
        var age = today.getFullYear() - this.date_naissance.getFullYear();
        var monthDiff = today.getMonth() - this.date_naissance.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.date_naissance.getDate())) {
            age--;
        }
        return age;
    };
    Patient.idCounter = 1;
    return Patient;
}());
exports.Patient = Patient;
