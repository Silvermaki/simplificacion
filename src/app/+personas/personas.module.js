"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var personas_routing_1 = require("./personas.routing");
var ver_personas_component_1 = require("./ver-personas/ver-personas.component");
var agregar_personas_component_1 = require("./agregar-personas/agregar-personas.component");
var personas_service_1 = require("./personas.service");
var smartadmin_module_1 = require("../shared/smartadmin.module");
var smartadmin_wizards_module_1 = require("../shared/forms/wizards/smartadmin-wizards.module");
var PersonasModule = (function () {
    function PersonasModule() {
    }
    return PersonasModule;
}());
PersonasModule = __decorate([
    core_1.NgModule({
        declarations: [agregar_personas_component_1.AgregarPersonasComponent, ver_personas_component_1.VerPersonasComponent],
        imports: [personas_routing_1.routing, smartadmin_module_1.SmartadminModule, smartadmin_wizards_module_1.SmartadminWizardsModule, common_1.CommonModule],
        providers: [personas_service_1.PersonasService]
    })
], PersonasModule);
exports.PersonasModule = PersonasModule;
//# sourceMappingURL=personas.module.js.map