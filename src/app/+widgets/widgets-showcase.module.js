"use strict";
var core_1 = require("@angular/core");
var smartadmin_module_1 = require("../shared/smartadmin.module");
var widgets_showcase_routing_1 = require("./widgets-showcase.routing");
var widgets_showcase_component_1 = require("./widgets-showcase.component");
var WidgetsShowcaseModule = (function () {
    function WidgetsShowcaseModule() {
    }
    return WidgetsShowcaseModule;
}());
WidgetsShowcaseModule = __decorate([
    core_1.NgModule({
        declarations: [
            widgets_showcase_component_1.WidgetsShowcaseComponent
        ],
        imports: [
            smartadmin_module_1.SmartadminModule,
            widgets_showcase_routing_1.routing
        ],
        providers: [],
    })
], WidgetsShowcaseModule);
exports.WidgetsShowcaseModule = WidgetsShowcaseModule;
//# sourceMappingURL=widgets-showcase.module.js.map