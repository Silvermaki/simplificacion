"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var morris_charts_routing_1 = require("./morris-charts.routing");
var morris_charts_component_1 = require("./morris-charts.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var morris_graph_module_1 = require("../../shared/graphs/morris-graph/morris-graph.module");
var MorrisChartsModule = (function () {
    function MorrisChartsModule() {
    }
    return MorrisChartsModule;
}());
MorrisChartsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            morris_charts_routing_1.morrisChartsRouting,
            smartadmin_module_1.SmartadminModule,
            morris_graph_module_1.MorrisGraphModule
        ],
        declarations: [morris_charts_component_1.MorrisChartsComponent]
    })
], MorrisChartsModule);
exports.MorrisChartsModule = MorrisChartsModule;
//# sourceMappingURL=morris-charts.module.js.map