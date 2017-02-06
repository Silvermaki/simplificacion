"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var select2_module_1 = require("./input/select2/select2.module");
var on_off_switch_module_1 = require("./input/on-off-switch/on-off-switch.module");
var SmartadminFormsLiteModule = (function () {
    function SmartadminFormsLiteModule() {
    }
    return SmartadminFormsLiteModule;
}());
SmartadminFormsLiteModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule],
        declarations: [],
        exports: [
            select2_module_1.Select2Module, on_off_switch_module_1.OnOffSwitchModule
        ]
    })
], SmartadminFormsLiteModule);
exports.SmartadminFormsLiteModule = SmartadminFormsLiteModule;
//# sourceMappingURL=smartadmin-forms-lite.module.js.map