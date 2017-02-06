"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var form_plugins_routing_1 = require("./form-plugins.routing");
var form_plugins_component_1 = require("./form-plugins.component");
var x_editable_widget_component_1 = require("./x-editable-widget/x-editable-widget.component");
var duallistbox_widget_component_1 = require("./duallistbox-widget/duallistbox-widget.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var smartadmin_input_module_1 = require("../../shared/forms/input/smartadmin-input.module");
var FormPluginsModule = (function () {
    function FormPluginsModule() {
    }
    return FormPluginsModule;
}());
FormPluginsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            form_plugins_routing_1.formPluginsRouting,
            smartadmin_module_1.SmartadminModule,
            smartadmin_input_module_1.SmartadminInputModule,
        ],
        declarations: [form_plugins_component_1.FormPluginsComponent, x_editable_widget_component_1.XEditableWidgetComponent, duallistbox_widget_component_1.DuallistboxWidgetComponent]
    })
], FormPluginsModule);
exports.FormPluginsModule = FormPluginsModule;
//# sourceMappingURL=form-plugins.module.js.map