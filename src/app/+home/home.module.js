"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_routing_1 = require("./home.routing");
var smartadmin_module_1 = require("../shared/smartadmin.module");
var home_component_1 = require("./home.component");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            home_routing_1.homeRouting,
            smartadmin_module_1.SmartadminModule
        ],
        declarations: [home_component_1.HomeComponent]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map