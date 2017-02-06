"use strict";
var core_1 = require("@angular/core");
var smartadmin_intel_routing_1 = require("./smartadmin-intel.routing");
var app_layouts_component_1 = require("./app-layouts/app-layouts.component");
var prebuilt_skins_component_1 = require("./prebuilt-skins/prebuilt-skins.component");
var SmartadminIntelModule = (function () {
    function SmartadminIntelModule() {
    }
    return SmartadminIntelModule;
}());
SmartadminIntelModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_layouts_component_1.AppLayoutsComponent,
            prebuilt_skins_component_1.PrebuiltSkinsComponent
        ],
        imports: [
            smartadmin_intel_routing_1.routing
        ],
        entryComponents: [app_layouts_component_1.AppLayoutsComponent, prebuilt_skins_component_1.PrebuiltSkinsComponent],
    })
], SmartadminIntelModule);
exports.SmartadminIntelModule = SmartadminIntelModule;
//# sourceMappingURL=smartadmin-intel.module.js.map