"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var error404_component_1 = require("./error404.component");
var routes = [{
        path: '',
        component: error404_component_1.Error404Component
    }];
var Error404RoutingModule = (function () {
    function Error404RoutingModule() {
    }
    return Error404RoutingModule;
}());
Error404RoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], Error404RoutingModule);
exports.Error404RoutingModule = Error404RoutingModule;
//# sourceMappingURL=error404-routing.module.js.map