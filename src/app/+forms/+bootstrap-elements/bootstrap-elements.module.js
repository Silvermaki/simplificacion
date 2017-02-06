"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var bootstrap_elements_routing_1 = require("./bootstrap-elements.routing");
var bootstrap_elements_component_1 = require("./bootstrap-elements.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var BootstrapElementsModule = (function () {
    function BootstrapElementsModule() {
    }
    return BootstrapElementsModule;
}());
BootstrapElementsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            bootstrap_elements_routing_1.bootstrapElementsRouting,
            smartadmin_module_1.SmartadminModule
        ],
        declarations: [bootstrap_elements_component_1.BootstrapElementsComponent]
    })
], BootstrapElementsModule);
exports.BootstrapElementsModule = BootstrapElementsModule;
//# sourceMappingURL=bootstrap-elements.module.js.map