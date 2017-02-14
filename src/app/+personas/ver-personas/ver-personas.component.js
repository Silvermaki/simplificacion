"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var personas_service_1 = require("../personas.service");
var VerPersonasComponent = (function () {
    function VerPersonasComponent(router, PersonasService) {
        this.router = router;
        this.PersonasService = PersonasService;
        this.persons = [];
        this.currentUser = JSON.parse(sessionStorage.getItem('user'));
        this.loadPersons();
    }
    VerPersonasComponent.prototype.ngOnInit = function () {
    };
    VerPersonasComponent.prototype.loadPersons = function () {
        var _this = this;
        this.PersonasService.getPersons(this.currentUser).subscribe(function (data) { _this.persons = data[0]; }, function (err) { return console.log(err); });
    };
    return VerPersonasComponent;
}());
VerPersonasComponent = __decorate([
    core_1.Component({
        selector: 'ver-personas',
        templateUrl: './ver-personas.component.html',
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
], VerPersonasComponent);
exports.VerPersonasComponent = VerPersonasComponent;
//# sourceMappingURL=ver-personas.component.js.map