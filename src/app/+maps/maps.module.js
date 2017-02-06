"use strict";
var core_1 = require("@angular/core");
var smartadmin_module_1 = require("../shared/smartadmin.module");
var maps_component_1 = require("./maps.component");
var map_style_service_1 = require("./shared/map-style.service");
var google_api_service_1 = require("./shared/google-api.service");
var maps_routing_1 = require("./maps.routing");
var MapsModule = (function () {
    function MapsModule() {
    }
    return MapsModule;
}());
MapsModule = __decorate([
    core_1.NgModule({
        imports: [maps_routing_1.routing, smartadmin_module_1.SmartadminModule],
        declarations: [maps_component_1.MapsComponent],
        exports: [maps_component_1.MapsComponent],
        providers: [google_api_service_1.GoogleAPIService, map_style_service_1.MapStyleService],
    })
], MapsModule);
exports.MapsModule = MapsModule;
//# sourceMappingURL=maps.module.js.map