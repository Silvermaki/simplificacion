"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var general_view_component_1 = require("./general-view.component");
var routes = [{
        path: '',
        component: general_view_component_1.GeneralViewComponent
    }];
var GeneralViewRoutingModule = (function () {
    function GeneralViewRoutingModule() {
    }
    return GeneralViewRoutingModule;
}());
GeneralViewRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], GeneralViewRoutingModule);
exports.GeneralViewRoutingModule = GeneralViewRoutingModule;
//# sourceMappingURL=general-view-routing.module.js.map