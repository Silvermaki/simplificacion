"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var blank_routing_module_1 = require("./blank-routing.module");
var blank_component_1 = require("./blank.component");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var smartadmin_widgets_module_1 = require("../../shared/widgets/smartadmin-widgets.module");
var BlankModule = (function () {
    function BlankModule() {
    }
    return BlankModule;
}());
BlankModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            blank_routing_module_1.BlankRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
            smartadmin_widgets_module_1.SmartadminWidgetsModule,
        ],
        declarations: [blank_component_1.BlankComponent]
    })
], BlankModule);
exports.BlankModule = BlankModule;
//# sourceMappingURL=blank.module.js.map