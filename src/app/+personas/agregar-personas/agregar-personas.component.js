"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var personas_service_1 = require("../personas.service");
var AgregarPersonasComponent = (function () {
    function AgregarPersonasComponent(router, PersonasService) {
        this.router = router;
        this.PersonasService = PersonasService;
        this.currentUser = JSON.parse(sessionStorage.getItem('user'));
        this.persona = {
            hash: this.currentUser.hash,
            nombre: "",
            apellido: "",
            profesion: "",
            estadoCivil: "",
            nacionalidad: "",
            tipoIdentificacion: "",
            numeroIdentificacion: "",
            correo: "",
            direccion: ""
        };
        this.submitted = false;
        this.countries = [];
        this.getCountries();
    }
    AgregarPersonasComponent.prototype.getCountries = function () {
        var _this = this;
        this.PersonasService.getCountries(this.persona).subscribe(function (data) { _this.countries = data[0]; }, function (err) { return console.log(err); });
    };
    AgregarPersonasComponent.prototype.checkDocument = function () {
        if (this.persona.nacionalidad === "Honduras") {
            this.documents = ["Tarjeta de Identidad"];
            this.persona.tipoIdentificacion = "";
        }
        else if (this.persona.nacionalidad === "") {
            this.documents = [];
            this.persona.tipoIdentificacion = "";
        }
        else {
            this.documents = ["Pasaporte", "Carné de Residencia"];
            this.persona.tipoIdentificacion = "";
        }
    };
    AgregarPersonasComponent.prototype.ngOnInit = function () {
    };
    AgregarPersonasComponent.prototype.checkValues = function () {
        if (this.result === -1971) {
            this.messageError = "Error al agregar persona";
            this.messageSuccess = "";
        }
        else {
            this.messageSuccess = "Persona agregada exitósamente";
            this.messageError = "";
            this.persona = {
                hash: this.currentUser.hash,
                nombre: "",
                apellido: "",
                profesion: "",
                estadoCivil: "",
                nacionalidad: "",
                tipoIdentificacion: "",
                numeroIdentificacion: "",
                correo: "",
                direccion: ""
            };
            this.submitted = false;
        }
    };
    AgregarPersonasComponent.prototype.submitForm = function () {
        var _this = this;
        this.submitted = true;
        this.PersonasService.addPerson(this.persona).subscribe(function (data) { _this.result = data[0][0]['mensaje'], _this.checkValues(); }, function (err) { return console.log(err); });
    };
    return AgregarPersonasComponent;
}());
AgregarPersonasComponent = __decorate([
    core_1.Component({
        selector: 'agregar-personas',
        templateUrl: './agregar-personas.component.html',
        animations: [
            core_1.trigger('changePane', [
                core_1.state('out', core_1.style({
                    height: 0,
                })),
                core_1.state('in', core_1.style({
                    height: '*',
                })),
                core_1.transition('out => in', core_1.animate('250ms ease-out')),
                core_1.transition('in => out', core_1.animate('250ms 300ms ease-in '))
            ])
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        personas_service_1.PersonasService])
], AgregarPersonasComponent);
exports.AgregarPersonasComponent = AgregarPersonasComponent;
//# sourceMappingURL=agregar-personas.component.js.map