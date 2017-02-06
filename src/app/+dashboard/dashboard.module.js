"use strict";
var core_1 = require("@angular/core");
var smartadmin_module_1 = require("../shared/smartadmin.module");
var dashboard_routing_1 = require("./dashboard.routing");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            smartadmin_module_1.SmartadminModule,
            dashboard_routing_1.routing,
        ],
        declarations: [],
        providers: [],
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map