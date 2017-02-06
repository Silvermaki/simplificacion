"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var error500_component_1 = require("./error500.component");
var routes = [{
        path: '',
        component: error500_component_1.Error500Component
    }];
var Error500RoutingModule = (function () {
    function Error500RoutingModule() {
    }
    return Error500RoutingModule;
}());
Error500RoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], Error500RoutingModule);
exports.Error500RoutingModule = Error500RoutingModule;
//# sourceMappingURL=error500-routing.module.js.map