"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dygraphs_routing_1 = require("./dygraphs.routing");
var dygraphs_component_1 = require("./dygraphs.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var dygraph_module_1 = require("../../shared/graphs/dygraph/dygraph.module");
var DygraphsModule = (function () {
    function DygraphsModule() {
    }
    return DygraphsModule;
}());
DygraphsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            dygraphs_routing_1.dygraphsRouting,
            smartadmin_module_1.SmartadminModule,
            dygraph_module_1.DygraphModule
        ],
        declarations: [dygraphs_component_1.DygraphsComponent]
    })
], DygraphsModule);
exports.DygraphsModule = DygraphsModule;
//# sourceMappingURL=dygraphs.module.js.map