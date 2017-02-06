"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var easy_pie_chart_container_directive_1 = require("./easy-pie-chart-container.directive");
var sparkline_container_directive_1 = require("./sparkline-container.directive");
var InlineGraphsModule = (function () {
    function InlineGraphsModule() {
    }
    return InlineGraphsModule;
}());
InlineGraphsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [easy_pie_chart_container_directive_1.EasyPieChartContainer, sparkline_container_directive_1.SparklineContainer],
        exports: [easy_pie_chart_container_directive_1.EasyPieChartContainer, sparkline_container_directive_1.SparklineContainer],
    })
], InlineGraphsModule);
exports.InlineGraphsModule = InlineGraphsModule;
//# sourceMappingURL=inline-graphs.module.js.map