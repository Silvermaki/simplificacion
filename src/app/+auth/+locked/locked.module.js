"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var locked_routing_module_1 = require("./locked-routing.module");
var locked_component_1 = require("./locked.component");
var LockedModule = (function () {
    function LockedModule() {
    }
    return LockedModule;
}());
LockedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            locked_routing_module_1.LockedRoutingModule
        ],
        declarations: [locked_component_1.LockedComponent]
    })
], LockedModule);
exports.LockedModule = LockedModule;
//# sourceMappingURL=locked.module.js.map