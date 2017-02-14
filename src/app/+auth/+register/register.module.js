"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var register_routing_module_1 = require("./register-routing.module");
var register_component_1 = require("./register.component");
var auth_service_1 = require("../auth.service");
var smartadmin_validation_module_1 = require("../../shared/forms/validation/smartadmin-validation.module");
var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            register_routing_module_1.RegisterRoutingModule,
            smartadmin_validation_module_1.SmartadminValidationModule
        ],
        declarations: [register_component_1.RegisterComponent],
        providers: [auth_service_1.AuthService]
    })
], RegisterModule);
exports.RegisterModule = RegisterModule;
//# sourceMappingURL=register.module.js.map