"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var highchart_table_directive_1 = require("./highchart-table.directive");
var HighchartsModule = (function () {
    function HighchartsModule() {
    }
    return HighchartsModule;
}());
HighchartsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [highchart_table_directive_1.HighchartTable],
        exports: [highchart_table_directive_1.HighchartTable]
    })
], HighchartsModule);
exports.HighchartsModule = HighchartsModule;
//# sourceMappingURL=highcharts.module.js.map