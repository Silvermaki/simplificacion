"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var stats_component_1 = require("./stats.component");
var inline_graphs_module_1 = require("../graphs/inline/inline-graphs.module");
var StatsModule = (function () {
    function StatsModule() {
    }
    return StatsModule;
}());
StatsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, inline_graphs_module_1.InlineGraphsModule],
        declarations: [stats_component_1.StatsComponent],
        exports: [stats_component_1.StatsComponent],
    })
], StatsModule);
exports.StatsModule = StatsModule;
//# sourceMappingURL=stats.module.js.map