"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var login_routing_module_1 = require("./login-routing.module");
var login_component_1 = require("./login.component");
var auth_service_1 = require("../auth.service");
var smartadmin_validation_module_1 = require("../../shared/forms/validation/smartadmin-validation.module");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            login_routing_module_1.LoginRoutingModule,
            smartadmin_validation_module_1.SmartadminValidationModule
        ],
        declarations: [login_component_1.LoginComponent],
        providers: [auth_service_1.AuthService]
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map