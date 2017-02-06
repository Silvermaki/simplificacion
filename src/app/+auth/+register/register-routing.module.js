"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var register_component_1 = require("./register.component");
var routes = [{
        path: '',
        component: register_component_1.RegisterComponent
    }];
var RegisterRoutingModule = (function () {
    function RegisterRoutingModule() {
    }
    return RegisterRoutingModule;
}());
RegisterRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], RegisterRoutingModule);
exports.RegisterRoutingModule = RegisterRoutingModule;
//# sourceMappingURL=register-routing.module.js.map