"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var error500_routing_module_1 = require("./error500-routing.module");
var error500_component_1 = require("./error500.component");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var Error500Module = (function () {
    function Error500Module() {
    }
    return Error500Module;
}());
Error500Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            error500_routing_module_1.Error500RoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [error500_component_1.Error500Component]
    })
], Error500Module);
exports.Error500Module = Error500Module;
//# sourceMappingURL=error500.module.js.map