"use strict";
var core_1 = require("@angular/core");
var widget_component_1 = require("./widget/widget.component");
var widgets_grid_component_1 = require("./widgets-grid/widgets-grid.component");
var common_1 = require("@angular/common");
var SmartadminWidgetsModule = (function () {
    function SmartadminWidgetsModule() {
    }
    return SmartadminWidgetsModule;
}());
SmartadminWidgetsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [widget_component_1.WidgetComponent, widgets_grid_component_1.WidgetsGridComponent],
        exports: [widget_component_1.WidgetComponent, widgets_grid_component_1.WidgetsGridComponent]
    })
], SmartadminWidgetsModule);
exports.SmartadminWidgetsModule = SmartadminWidgetsModule;
//# sourceMappingURL=smartadmin-widgets.module.js.map