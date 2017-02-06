"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var blank_component_1 = require("./blank.component");
var routes = [{
        path: '',
        component: blank_component_1.BlankComponent
    }];
var BlankRoutingModule = (function () {
    function BlankRoutingModule() {
    }
    return BlankRoutingModule;
}());
BlankRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], BlankRoutingModule);
exports.BlankRoutingModule = BlankRoutingModule;
//# sourceMappingURL=blank-routing.module.js.map