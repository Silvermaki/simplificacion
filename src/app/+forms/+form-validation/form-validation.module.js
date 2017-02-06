"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var form_validation_routing_1 = require("./form-validation.routing");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var form_validation_component_1 = require("./form-validation.component");
var FormValidationModule = (function () {
    function FormValidationModule() {
    }
    return FormValidationModule;
}());
FormValidationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            form_validation_routing_1.formValidationRouting,
            smartadmin_module_1.SmartadminModule
        ],
        declarations: [form_validation_component_1.FormValidationComponent]
    })
], FormValidationModule);
exports.FormValidationModule = FormValidationModule;
//# sourceMappingURL=form-validation.module.js.map