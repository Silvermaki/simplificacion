"use strict";
var core_1 = require("@angular/core");
var smartadmin_module_1 = require("../shared/smartadmin.module");
var sparklines_component_1 = require("./+sparklines/sparklines.component");
var easy_pie_charts_component_1 = require("./+easy-pie-charts/easy-pie-charts.component");
var graphs_showcase_routing_1 = require("./graphs-showcase.routing");
var GraphsShowcaseModule = (function () {
    function GraphsShowcaseModule() {
    }
    return GraphsShowcaseModule;
}());
GraphsShowcaseModule = __decorate([
    core_1.NgModule({
        declarations: [
            sparklines_component_1.SparklinesComponent,
            easy_pie_charts_component_1.EasyPieChartsComponent,
        ],
        imports: [
            smartadmin_module_1.SmartadminModule,
            graphs_showcase_routing_1.routing
        ],
        providers: [],
    })
], GraphsShowcaseModule);
exports.GraphsShowcaseModule = GraphsShowcaseModule;
//# sourceMappingURL=graphs-showcase.module.js.map