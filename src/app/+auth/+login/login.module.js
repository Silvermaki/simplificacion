"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var login_routing_module_1 = require("./login-routing.module");
var login_component_1 = require("./login.component");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            login_routing_module_1.LoginRoutingModule
        ],
        declarations: [login_component_1.LoginComponent]
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map