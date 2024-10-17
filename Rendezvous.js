"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rendezvous = void 0;
var Rendezvous = /** @class */ (function () {
    function Rendezvous(date, statut, patientId, medecinId) {
        this.id = Rendezvous.idCounter++;
        this.date = date;
        this.statut = statut;
        this.patientId = patientId;
        this.medecinId = medecinId;
    }
    Rendezvous.prototype.toString = function (patients, medecins) {
        var _this = this;
        var patient = patients.find(function (p) { return p.id === _this.patientId; });
        var medecin = medecins.find(function (m) { return m.id === _this.medecinId; });
        var patientFullName = patient ? patient.getFullName() : "Patient non enregistré";
        var medecinFullName = medecin ? medecin.getFullName() : "Médecin non enregistré";
        return "Rendez-vous #".concat(this.id, ": ").concat(this.date.toLocaleDateString(), " avec le patient ").concat(patientFullName, " et le m\u00E9decin ").concat(medecinFullName);
    };
    Rendezvous.idCounter = 1;
    return Rendezvous;
}());
exports.Rendezvous = Rendezvous;
