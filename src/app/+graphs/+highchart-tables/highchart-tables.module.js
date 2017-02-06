"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var highchart_tables_routing_1 = require("./highchart-tables.routing");
var highchart_tables_component_1 = require("./highchart-tables.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var highcharts_module_1 = require("../../shared/graphs/highcharts/highcharts.module");
var HighchartTablesModule = (function () {
    function HighchartTablesModule() {
    }
    return HighchartTablesModule;
}());
HighchartTablesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            highchart_tables_routing_1.highchartTablesRouting,
            smartadmin_module_1.SmartadminModule,
            highcharts_module_1.HighchartsModule
        ],
        declarations: [highchart_tables_component_1.HighchartTablesComponent]
    })
], HighchartTablesModule);
exports.HighchartTablesModule = HighchartTablesModule;
//# sourceMappingURL=highchart-tables.module.js.map