"use strict";
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var solicitudes_service_1 = require("../solicitudes.service");
var IniciarSolicitudComponent = (function () {
    function IniciarSolicitudComponent(SolicitudesService, _sanitizer) {
        this.SolicitudesService = SolicitudesService;
        this._sanitizer = _sanitizer;
        this.currentUser = JSON.parse(sessionStorage.getItem('user'));
        this.tasks = [];
    }
    IniciarSolicitudComponent.prototype.ngOnInit = function () {
    };
    IniciarSolicitudComponent.prototype.print = function () {
        console.log(this.data);
        console.log(this.model);
    };
    IniciarSolicitudComponent.prototype.setActiveStep = function (step) {
        this.activeStep = step;
    };
    IniciarSolicitudComponent.prototype.prevStep = function () {
        var idx = this.data.forms.indexOf(this.activeStep);
        if (idx > 0) {
            this.activeStep = this.data.forms[idx - 1];
        }
    };
    IniciarSolicitudComponent.prototype.nextStep = function () {
        this.activeStep.submitted = true;
        if (!this.activeStep.valid) {
            return;
        }
        this.activeStep.checked = true;
        if (this.data.forms.every(function (it) { return (it.valid && it.checked); })) {
            this.onWizardComplete(this.model);
        }
        else {
            var idx = this.data.forms.indexOf(this.activeStep);
            this.activeStep = null;
            while (!this.activeStep) {
                idx = idx == this.data.forms.length - 1 ? 0 : idx + 1;
                if (!this.data.forms[idx].valid || !this.data.forms[idx].checked) {
                    this.activeStep = this.data.forms[idx];
                }
            }
        }
    };
    IniciarSolicitudComponent.prototype.verify = function () {
        if (this.activeStep) {
            if (this.activeStep.submitted && !this.activeStep.valid) {
                return true;
            }
        }
        return false;
    };
    IniciarSolicitudComponent.prototype.onWizardComplete = function (data) {
        console.log('basic wizard complete', data);
    };
    // custom change detection
    IniciarSolicitudComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.lastModel) {
            // backup model to compare further with
            this.lastModel = Object.assign({}, this.model);
        }
        else {
            if (Object.keys(this.model).some(function (it) { return _this.model[it] != _this.lastModel[it]; })) {
                // change detected
                var i;
                for (i = 0; i < this.data.forms.length; i++) {
                    this.data.forms[i].valid = false;
                }
                // for(i=0;i<Object.keys(this.model).length;i++){
                // }
                //this.steps.find(it=>it.key == 'step1').valid = !!(this.model.email && this.model.firstname && this.model.lastname);
                //this.steps.find(it=>it.key == 'step2').valid = !!(this.model.country && this.model.city && this.model.postal);
                this.lastModel = Object.assign({}, this.model);
            }
        }
    };
    return IniciarSolicitudComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IniciarSolicitudComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IniciarSolicitudComponent.prototype, "activeStep", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IniciarSolicitudComponent.prototype, "model", void 0);
IniciarSolicitudComponent = __decorate([
    core_1.Component({
        selector: 'iniciar-solicitud',
        templateUrl: './iniciar-solicitud.component.html',
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
    __metadata("design:paramtypes", [solicitudes_service_1.SolicitudesService, platform_browser_1.DomSanitizer])
], IniciarSolicitudComponent);
exports.IniciarSolicitudComponent = IniciarSolicitudComponent;
//# sourceMappingURL=iniciar-solicitud.component.js.map