"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var wizards_routing_1 = require("./wizards.routing");
var wizards_component_1 = require("./wizards.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var smartadmin_wizards_module_1 = require("../../shared/forms/wizards/smartadmin-wizards.module");
var basic_wizard_widget_component_1 = require("./basic-wizard-widget/basic-wizard-widget.component");
var fuel_ux_wizard_widget_component_1 = require("./fuel-ux-wizard-widget/fuel-ux-wizard-widget.component");
var WizardsModule = (function () {
    function WizardsModule() {
    }
    return WizardsModule;
}());
WizardsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            wizards_routing_1.wizardsRouting,
            smartadmin_module_1.SmartadminModule,
            smartadmin_wizards_module_1.SmartadminWizardsModule
        ],
        declarations: [wizards_component_1.WizardsComponent, basic_wizard_widget_component_1.BasicWizardWidgetComponent, fuel_ux_wizard_widget_component_1.FuelUxWizardWidgetComponent]
    })
], WizardsModule);
exports.WizardsModule = WizardsModule;
//# sourceMappingURL=wizards.module.js.map