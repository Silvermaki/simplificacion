"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var flot_chart_component_1 = require("./flot-chart.component");
var FlotChartModule = (function () {
    function FlotChartModule() {
    }
    return FlotChartModule;
}());
FlotChartModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [flot_chart_component_1.FlotChartComponent],
        exports: [flot_chart_component_1.FlotChartComponent],
    })
], FlotChartModule);
exports.FlotChartModule = FlotChartModule;
//# sourceMappingURL=flot-chart.module.js.map