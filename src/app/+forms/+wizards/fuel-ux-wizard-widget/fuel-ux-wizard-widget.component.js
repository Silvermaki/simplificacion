"use strict";
var core_1 = require("@angular/core");
var FuelUxWizardWidgetComponent = (function () {
    function FuelUxWizardWidgetComponent() {
    }
    FuelUxWizardWidgetComponent.prototype.ngOnInit = function () {
    };
    FuelUxWizardWidgetComponent.prototype.onWizardComplete = function (data) {
        console.log('fuel-ux wizard complete', data);
    };
    return FuelUxWizardWidgetComponent;
}());
FuelUxWizardWidgetComponent = __decorate([
    core_1.Component({
        selector: 'fuel-ux-wizard-widget',
        templateUrl: './fuel-ux-wizard-widget.component.html',
    }),
    __metadata("design:paramtypes", [])
], FuelUxWizardWidgetComponent);
exports.FuelUxWizardWidgetComponent = FuelUxWizardWidgetComponent;
//# sourceMappingURL=fuel-ux-wizard-widget.component.js.map