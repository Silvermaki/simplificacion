"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var register_routing_module_1 = require("./register-routing.module");
var register_component_1 = require("./register.component");
var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            register_routing_module_1.RegisterRoutingModule
        ],
        declarations: [register_component_1.RegisterComponent]
    })
], RegisterModule);
exports.RegisterModule = RegisterModule;
//# sourceMappingURL=register.module.js.map