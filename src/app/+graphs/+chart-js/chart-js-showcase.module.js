"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var chart_js_showcase_routing_1 = require("./chart-js-showcase.routing");
var chart_js_showcase_component_1 = require("./chart-js-showcase.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var chart_js_module_1 = require("../../shared/graphs/chart-js/chart-js.module");
var ChartJsShowcaseModule = (function () {
    function ChartJsShowcaseModule() {
    }
    return ChartJsShowcaseModule;
}());
ChartJsShowcaseModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            chart_js_showcase_routing_1.chartJsShowcaseRouting,
            smartadmin_module_1.SmartadminModule,
            chart_js_module_1.ChartJsModule,
        ],
        declarations: [chart_js_showcase_component_1.ChartJsShowcaseComponent]
    })
], ChartJsShowcaseModule);
exports.ChartJsShowcaseModule = ChartJsShowcaseModule;
//# sourceMappingURL=chart-js-showcase.module.js.map