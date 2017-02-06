"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var smartadmin_input_module_1 = require("./input/smartadmin-input.module");
var smartadmin_validation_module_1 = require("./validation/smartadmin-validation.module");
var dropzone_module_1 = require("./dropzone/dropzone.module");
var smartadmin_wizards_module_1 = require("./wizards/smartadmin-wizards.module");
var SmartadminFormsModule = (function () {
    function SmartadminFormsModule() {
    }
    return SmartadminFormsModule;
}());
SmartadminFormsModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule],
        declarations: [],
        exports: [
            smartadmin_input_module_1.SmartadminInputModule,
            smartadmin_validation_module_1.SmartadminValidationModule,
            dropzone_module_1.DropzoneModule,
            smartadmin_wizards_module_1.SmartadminWizardsModule,
        ]
    })
], SmartadminFormsModule);
exports.SmartadminFormsModule = SmartadminFormsModule;
//# sourceMappingURL=smartadmin-forms.module.js.map