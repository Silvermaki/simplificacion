"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var auth_routing_1 = require("./auth.routing");
var auth_component_1 = require("./auth.component");
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            auth_routing_1.routing,
        ],
        declarations: [auth_component_1.AuthComponent]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map