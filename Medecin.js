"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medecin = void 0;
var Medecin = /** @class */ (function () {
    function Medecin(nom, prenom, specialite) {
        this.id = Medecin.idCounter++;
        this.nom = nom;
        this.prenom = prenom;
        this.specialite = specialite;
    }
    Medecin.prototype.getFullName = function () {
        return "".concat(this.prenom, " ").concat(this.nom);
    };
    Medecin.idCounter = 1;
    return Medecin;
}());
exports.Medecin = Medecin;
