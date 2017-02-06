"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var routes = [{
        path: '',
        component: login_component_1.LoginComponent
    }];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], LoginRoutingModule);
exports.LoginRoutingModule = LoginRoutingModule;
//# sourceMappingURL=login-routing.module.js.map