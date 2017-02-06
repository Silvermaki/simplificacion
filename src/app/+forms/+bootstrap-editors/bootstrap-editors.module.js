"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var bootstrap_editors_component_1 = require("./bootstrap-editors.component");
var bootstrap_editors_routing_1 = require("./bootstrap-editors.routing");
var smartadmin_editors_module_1 = require("../../shared/forms/editors/smartadmin-editors.module");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var BootstrapEditorsModule = (function () {
    function BootstrapEditorsModule() {
    }
    return BootstrapEditorsModule;
}());
BootstrapEditorsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            bootstrap_editors_routing_1.bootstrapEditorsRouting,
            smartadmin_editors_module_1.SmartadminEditorsModule,
            smartadmin_module_1.SmartadminModule,
        ],
        declarations: [bootstrap_editors_component_1.BootstrapEditorsComponent]
    })
], BootstrapEditorsModule);
exports.BootstrapEditorsModule = BootstrapEditorsModule;
//# sourceMappingURL=bootstrap-editors.module.js.map