"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var error404_routing_module_1 = require("./error404-routing.module");
var error404_component_1 = require("./error404.component");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var Error404Module = (function () {
    function Error404Module() {
    }
    return Error404Module;
}());
Error404Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            error404_routing_module_1.Error404RoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [error404_component_1.Error404Component]
    })
], Error404Module);
exports.Error404Module = Error404Module;
//# sourceMappingURL=error404.module.js.map