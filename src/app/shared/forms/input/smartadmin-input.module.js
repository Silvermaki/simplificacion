"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var colorpicker_directive_1 = require("./colorpicker.directive");
var file_input_component_1 = require("./file-input/file-input.component");
var knob_directive_1 = require("./knob.directive");
var masked_input_directive_1 = require("./masked-input.directive");
var ui_datepicker_directive_1 = require("./ui-datepicker.directive");
var ui_spinner_directive_1 = require("./ui-spinner.directive");
var x_editable_component_1 = require("./x-editable.component");
var duallistbox_component_1 = require("./duallistbox.component");
var nouislider_directive_1 = require("./nouislider.directive");
var ionslider_directive_1 = require("./ionslider.directive");
var smart_slider_directive_1 = require("./smart-slider.directive");
var smart_tags_directive_1 = require("./smart-tags.directive");
var smart_timepicker_directive_1 = require("./smart-timepicker.directive");
var smart_clockpicker_directive_1 = require("./smart-clockpicker.directive");
var select2_module_1 = require("./select2/select2.module");
var on_off_switch_module_1 = require("./on-off-switch/on-off-switch.module");
var SmartadminInputModule = (function () {
    function SmartadminInputModule() {
    }
    return SmartadminInputModule;
}());
SmartadminInputModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            colorpicker_directive_1.ColorpickerDirective,
            file_input_component_1.FileInputComponent,
            knob_directive_1.KnobDirective,
            masked_input_directive_1.MaskedInput,
            ui_datepicker_directive_1.UiDatepickerDirective,
            ui_spinner_directive_1.UiSpinner,
            x_editable_component_1.XEditableComponent,
            duallistbox_component_1.DuallistboxComponent,
            nouislider_directive_1.NouisliderDirective,
            ionslider_directive_1.IonSliderDirective,
            smart_slider_directive_1.SmartSliderDirective,
            smart_tags_directive_1.SmartTagsDirective,
            smart_timepicker_directive_1.SmartTimepickerDirective,
            smart_clockpicker_directive_1.SmartClockpickerDirective,
        ],
        exports: [
            colorpicker_directive_1.ColorpickerDirective,
            file_input_component_1.FileInputComponent,
            knob_directive_1.KnobDirective,
            masked_input_directive_1.MaskedInput,
            ui_datepicker_directive_1.UiDatepickerDirective,
            ui_spinner_directive_1.UiSpinner,
            x_editable_component_1.XEditableComponent,
            duallistbox_component_1.DuallistboxComponent,
            nouislider_directive_1.NouisliderDirective,
            ionslider_directive_1.IonSliderDirective,
            smart_slider_directive_1.SmartSliderDirective,
            smart_tags_directive_1.SmartTagsDirective,
            smart_timepicker_directive_1.SmartTimepickerDirective,
            smart_clockpicker_directive_1.SmartClockpickerDirective,
            select2_module_1.Select2Module,
            on_off_switch_module_1.OnOffSwitchModule,
        ]
    })
], SmartadminInputModule);
exports.SmartadminInputModule = SmartadminInputModule;
//# sourceMappingURL=smartadmin-input.module.js.map