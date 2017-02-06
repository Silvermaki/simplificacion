"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var locked_component_1 = require("./locked.component");
var routes = [{
        path: '',
        component: locked_component_1.LockedComponent
    }];
var LockedRoutingModule = (function () {
    function LockedRoutingModule() {
    }
    return LockedRoutingModule;
}());
LockedRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], LockedRoutingModule);
exports.LockedRoutingModule = LockedRoutingModule;
//# sourceMappingURL=locked-routing.module.js.map