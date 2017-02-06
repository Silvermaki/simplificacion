"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pricing_tables_component_1 = require("./pricing-tables.component");
var routes = [{
        path: '',
        component: pricing_tables_component_1.PricingTablesComponent
    }];
var PricingTablesRoutingModule = (function () {
    function PricingTablesRoutingModule() {
    }
    return PricingTablesRoutingModule;
}());
PricingTablesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], PricingTablesRoutingModule);
exports.PricingTablesRoutingModule = PricingTablesRoutingModule;
//# sourceMappingURL=pricing-tables-routing.module.js.map