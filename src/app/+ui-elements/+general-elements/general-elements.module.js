"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var general_elements_routing_1 = require("./general-elements.routing");
var general_elements_component_1 = require("./general-elements.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var GeneralElementsModule = (function () {
    function GeneralElementsModule() {
    }
    return GeneralElementsModule;
}());
GeneralElementsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            general_elements_routing_1.generalElementsRouting,
            smartadmin_module_1.SmartadminModule,
            ng2_bootstrap_1.AccordionModule.forRoot(),
            ng2_bootstrap_1.CarouselModule.forRoot(),
        ],
        declarations: [general_elements_component_1.GeneralElementsComponent]
    })
], GeneralElementsModule);
exports.GeneralElementsModule = GeneralElementsModule;
//# sourceMappingURL=general-elements.module.js.map