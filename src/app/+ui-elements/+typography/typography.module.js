"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var typography_routing_1 = require("./typography.routing");
var typography_component_1 = require("./typography.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var TypographyModule = (function () {
    function TypographyModule() {
    }
    return TypographyModule;
}());
TypographyModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            typography_routing_1.typographyRouting,
            smartadmin_module_1.SmartadminModule,
        ],
        declarations: [typography_component_1.TypographyComponent]
    })
], TypographyModule);
exports.TypographyModule = TypographyModule;
//# sourceMappingURL=typography.module.js.map