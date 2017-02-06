"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var smart_progressbar_module_1 = require("./smart-progressbar/smart-progressbar.module");
var tree_view_module_1 = require("./tree-view/tree-view.module");
var jquery_ui_module_1 = require("./jquery-ui/jquery-ui.module");
var nestable_list_module_1 = require("./nestable-list/nestable-list.module");
var SmartadminUiModule = (function () {
    function SmartadminUiModule() {
    }
    return SmartadminUiModule;
}());
SmartadminUiModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [smart_progressbar_module_1.SmartProgressbarModule, jquery_ui_module_1.JqueryUiModule, nestable_list_module_1.NestableListModule, tree_view_module_1.TreeViewModule],
    })
], SmartadminUiModule);
exports.SmartadminUiModule = SmartadminUiModule;
//# sourceMappingURL=smartadmin-ui.module.js.map