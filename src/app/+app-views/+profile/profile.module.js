"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var profile_routing_module_1 = require("./profile-routing.module");
var profile_component_1 = require("./profile.component");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
            profile_routing_module_1.ProfileRoutingModule
        ],
        declarations: [profile_component_1.ProfileComponent]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=profile.module.js.map