"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var flot_charts_routing_1 = require("./flot-charts.routing");
var flot_charts_component_1 = require("./flot-charts.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var flot_chart_module_1 = require("../../shared/graphs/flot-chart/flot-chart.module");
var FlotChartsModule = (function () {
    function FlotChartsModule() {
    }
    return FlotChartsModule;
}());
FlotChartsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            flot_charts_routing_1.flotChartsRouting,
            smartadmin_module_1.SmartadminModule,
            flot_chart_module_1.FlotChartModule
        ],
        declarations: [flot_charts_component_1.FlotChartsComponent]
    })
], FlotChartsModule);
exports.FlotChartsModule = FlotChartsModule;
//# sourceMappingURL=flot-charts.module.js.map