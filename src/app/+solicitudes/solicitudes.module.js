"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var solicitudes_routing_1 = require("./solicitudes.routing");
var iniciar_solicitud_component_1 = require("./iniciar-solicitud/iniciar-solicitud.component");
var solicitudes_component_1 = require("./solicitudes.component");
var solicitudes_service_1 = require("./solicitudes.service");
var smartadmin_module_1 = require("../shared/smartadmin.module");
var smartadmin_wizards_module_1 = require("../shared/forms/wizards/smartadmin-wizards.module");
var smartadmin_input_module_1 = require("../shared/forms/input/smartadmin-input.module");
var SolicitudesModule = (function () {
    function SolicitudesModule() {
    }
    return SolicitudesModule;
}());
SolicitudesModule = __decorate([
    core_1.NgModule({
        declarations: [solicitudes_component_1.SolicitudesComponent, iniciar_solicitud_component_1.IniciarSolicitudComponent],
        imports: [solicitudes_routing_1.routing, smartadmin_module_1.SmartadminModule, smartadmin_wizards_module_1.SmartadminWizardsModule, common_1.CommonModule, smartadmin_input_module_1.SmartadminInputModule],
        providers: [solicitudes_service_1.SolicitudesService]
    })
], SolicitudesModule);
exports.SolicitudesModule = SolicitudesModule;
//# sourceMappingURL=solicitudes.module.js.map