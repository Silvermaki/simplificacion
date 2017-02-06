"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var timeline_routing_module_1 = require("./timeline-routing.module");
var timeline_component_1 = require("./timeline.component");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var TimelineModule = (function () {
    function TimelineModule() {
    }
    return TimelineModule;
}());
TimelineModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
            timeline_routing_module_1.TimelineRoutingModule
        ],
        declarations: [timeline_component_1.TimelineComponent]
    })
], TimelineModule);
exports.TimelineModule = TimelineModule;
//# sourceMappingURL=timeline.module.js.map