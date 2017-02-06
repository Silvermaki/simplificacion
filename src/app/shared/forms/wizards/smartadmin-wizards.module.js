"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var fuel_ux_wizard_component_1 = require("./fuel-ux-wizard.component");
var SmartadminWizardsModule = (function () {
    function SmartadminWizardsModule() {
    }
    return SmartadminWizardsModule;
}());
SmartadminWizardsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [fuel_ux_wizard_component_1.FuelUxWizardComponent],
        exports: [fuel_ux_wizard_component_1.FuelUxWizardComponent]
    })
], SmartadminWizardsModule);
exports.SmartadminWizardsModule = SmartadminWizardsModule;
//# sourceMappingURL=smartadmin-wizards.module.js.map