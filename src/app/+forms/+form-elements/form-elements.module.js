"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var form_elements_routing_1 = require("./form-elements.routing");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var form_elements_component_1 = require("./form-elements.component");
var FormElementsModule = (function () {
    function FormElementsModule() {
    }
    return FormElementsModule;
}());
FormElementsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            form_elements_routing_1.formElementsRouting,
            smartadmin_module_1.SmartadminModule
        ],
        declarations: [form_elements_component_1.FormElementsComponent]
    })
], FormElementsModule);
exports.FormElementsModule = FormElementsModule;
//# sourceMappingURL=form-elements.module.js.map