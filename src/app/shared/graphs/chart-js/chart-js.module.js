"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var chart_js_component_1 = require("./chart-js.component");
var ChartJsModule = (function () {
    function ChartJsModule() {
    }
    return ChartJsModule;
}());
ChartJsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [chart_js_component_1.ChartJsComponent],
        exports: [chart_js_component_1.ChartJsComponent],
    })
], ChartJsModule);
exports.ChartJsModule = ChartJsModule;
//# sourceMappingURL=chart-js.module.js.map