"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var pricing_tables_routing_module_1 = require("./pricing-tables-routing.module");
var pricing_tables_component_1 = require("./pricing-tables.component");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var PricingTablesModule = (function () {
    function PricingTablesModule() {
    }
    return PricingTablesModule;
}());
PricingTablesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            pricing_tables_routing_module_1.PricingTablesRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [pricing_tables_component_1.PricingTablesComponent]
    })
], PricingTablesModule);
exports.PricingTablesModule = PricingTablesModule;
//# sourceMappingURL=pricing-tables.module.js.map