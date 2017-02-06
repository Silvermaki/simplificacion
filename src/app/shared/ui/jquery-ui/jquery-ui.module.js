"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var jqui_dialog_launcher_directive_1 = require("./jqui-dialog/jqui-dialog-launcher.directive");
var jqui_accordion_directive_1 = require("./jqui-accordion.directive");
var jqui_menu_directive_1 = require("./jqui-menu.directive");
var jqui_autocomplete_directive_1 = require("./jqui-autocomplete.directive");
var jqui_progressbar_directive_1 = require("./jqui-progressbar.directive");
var jqui_spinner_directive_1 = require("./jqui-spinner.directive");
var jqui_slider_directive_1 = require("./jqui-slider.directive");
var jqui_tabs_directive_1 = require("./jqui-tabs.directive");
var jqui_dialog_directive_1 = require("./jqui-dialog/jqui-dialog.directive");
var JqueryUiModule = (function () {
    function JqueryUiModule() {
    }
    return JqueryUiModule;
}());
JqueryUiModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            jqui_dialog_directive_1.JquiDialog,
            jqui_dialog_launcher_directive_1.JquiDialogLauncher,
            jqui_accordion_directive_1.JquiAccordion,
            jqui_menu_directive_1.JquiMenu,
            jqui_autocomplete_directive_1.JquiAutocomplete,
            jqui_progressbar_directive_1.JquiProgressbar,
            jqui_spinner_directive_1.JquiSpinner,
            jqui_slider_directive_1.JquiSlider,
            jqui_tabs_directive_1.JquiTabs,
        ],
        exports: [
            jqui_dialog_directive_1.JquiDialog,
            jqui_dialog_launcher_directive_1.JquiDialogLauncher,
            jqui_accordion_directive_1.JquiAccordion,
            jqui_menu_directive_1.JquiMenu,
            jqui_autocomplete_directive_1.JquiAutocomplete,
            jqui_progressbar_directive_1.JquiProgressbar,
            jqui_spinner_directive_1.JquiSpinner,
            jqui_slider_directive_1.JquiSlider,
            jqui_tabs_directive_1.JquiTabs,
        ]
    })
], JqueryUiModule);
exports.JqueryUiModule = JqueryUiModule;
//# sourceMappingURL=jquery-ui.module.js.map