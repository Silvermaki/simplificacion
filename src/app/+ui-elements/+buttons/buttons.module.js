"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var buttons_routing_1 = require("./buttons.routing");
var buttons_component_1 = require("./buttons.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    return ButtonsModule;
}());
ButtonsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            buttons_routing_1.buttonsRouting,
            smartadmin_module_1.SmartadminModule
        ],
        declarations: [buttons_component_1.ButtonsComponent]
    })
], ButtonsModule);
exports.ButtonsModule = ButtonsModule;
//# sourceMappingURL=buttons.module.js.map