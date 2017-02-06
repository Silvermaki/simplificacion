"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ckeditor_routing_module_1 = require("./ckeditor-routing.module");
var ckeditor_component_1 = require("./ckeditor.component");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var smartadmin_widgets_module_1 = require("../../shared/widgets/smartadmin-widgets.module");
var CkeditorModule = (function () {
    function CkeditorModule() {
    }
    return CkeditorModule;
}());
CkeditorModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ckeditor_routing_module_1.CkeditorRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
            smartadmin_widgets_module_1.SmartadminWidgetsModule,
        ],
        declarations: [ckeditor_component_1.CkeditorComponent]
    })
], CkeditorModule);
exports.CkeditorModule = CkeditorModule;
//# sourceMappingURL=ckeditor.module.js.map