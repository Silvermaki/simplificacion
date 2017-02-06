"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var general_view_routing_module_1 = require("./general-view-routing.module");
var general_view_component_1 = require("./general-view.component");
var layout_module_1 = require("../../../shared/layout/layout.module");
var stats_module_1 = require("../../../shared/stats/stats.module");
var GeneralViewModule = (function () {
    function GeneralViewModule() {
    }
    return GeneralViewModule;
}());
GeneralViewModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            general_view_routing_module_1.GeneralViewRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [general_view_component_1.GeneralViewComponent]
    })
], GeneralViewModule);
exports.GeneralViewModule = GeneralViewModule;
//# sourceMappingURL=general-view.module.js.map