"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ui_validate_directive_1 = require("./ui-validate.directive");
var bootstrap_validator_directive_1 = require("./bootstrap-validator.directive");
var SmartadminValidationModule = (function () {
    function SmartadminValidationModule() {
    }
    return SmartadminValidationModule;
}());
SmartadminValidationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            ui_validate_directive_1.UiValidateDirective,
            bootstrap_validator_directive_1.BootstrapValidatorDirective
        ],
        exports: [
            ui_validate_directive_1.UiValidateDirective,
            bootstrap_validator_directive_1.BootstrapValidatorDirective
        ]
    })
], SmartadminValidationModule);
exports.SmartadminValidationModule = SmartadminValidationModule;
//# sourceMappingURL=smartadmin-validation.module.js.map