"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forgot_routing_module_1 = require("./forgot-routing.module");
var forgot_component_1 = require("./forgot.component");
var ForgotModule = (function () {
    function ForgotModule() {
    }
    return ForgotModule;
}());
ForgotModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forgot_routing_module_1.ForgotRoutingModule
        ],
        declarations: [forgot_component_1.ForgotComponent]
    })
], ForgotModule);
exports.ForgotModule = ForgotModule;
//# sourceMappingURL=forgot.module.js.map