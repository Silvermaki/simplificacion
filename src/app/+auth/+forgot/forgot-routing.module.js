"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forgot_component_1 = require("./forgot.component");
var routes = [{
        path: '',
        component: forgot_component_1.ForgotComponent
    }];
var ForgotRoutingModule = (function () {
    function ForgotRoutingModule() {
    }
    return ForgotRoutingModule;
}());
ForgotRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], ForgotRoutingModule);
exports.ForgotRoutingModule = ForgotRoutingModule;
//# sourceMappingURL=forgot-routing.module.js.map