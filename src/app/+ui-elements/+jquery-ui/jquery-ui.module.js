"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var jquery_ui_routing_1 = require("./jquery-ui.routing");
var jquery_ui_component_1 = require("./jquery-ui.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var jquery_ui_module_1 = require("../../shared/ui/jquery-ui/jquery-ui.module");
var JqueryUiShowcaseModule = (function () {
    function JqueryUiShowcaseModule() {
    }
    return JqueryUiShowcaseModule;
}());
JqueryUiShowcaseModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            jquery_ui_routing_1.jqueryUiRouting,
            smartadmin_module_1.SmartadminModule,
            jquery_ui_module_1.JqueryUiModule,
        ],
        declarations: [jquery_ui_component_1.JqueryUiComponent]
    })
], JqueryUiShowcaseModule);
exports.JqueryUiShowcaseModule = JqueryUiShowcaseModule;
//# sourceMappingURL=jquery-ui.module.js.map