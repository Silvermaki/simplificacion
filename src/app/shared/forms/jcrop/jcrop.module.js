"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var field_component_1 = require("./components/field.component");
var fields_component_1 = require("./components/fields.component");
var jcrop_component_1 = require("./components/jcrop.component");
var crop_actions_1 = require("./actions/crop.actions");
var option_radio_component_1 = require("./components/option-radio.component");
var option_toggle_component_1 = require("./components/option-toggle.component");
var options_actions_1 = require("./actions/options.actions");
var forms_1 = require("@angular/forms");
var jcrop_preview_component_1 = require("./components/jcrop-preview.component");
var JcropModule = (function () {
    function JcropModule() {
    }
    return JcropModule;
}());
JcropModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [field_component_1.FieldComponent, fields_component_1.FieldsComponent, jcrop_component_1.JcropComponent,
            option_radio_component_1.OptionRadioComponent, option_toggle_component_1.OptionToggleComponent, jcrop_preview_component_1.JcropPreviewComponent],
        exports: [field_component_1.FieldComponent, fields_component_1.FieldsComponent, jcrop_component_1.JcropComponent,
            option_radio_component_1.OptionRadioComponent, option_toggle_component_1.OptionToggleComponent, jcrop_preview_component_1.JcropPreviewComponent],
        providers: [crop_actions_1.CropActions, options_actions_1.OptionsActions]
    })
], JcropModule);
exports.JcropModule = JcropModule;
//# sourceMappingURL=jcrop.module.js.map