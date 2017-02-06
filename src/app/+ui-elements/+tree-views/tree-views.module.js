"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var tree_views_routing_1 = require("./tree-views.routing");
var tree_views_component_1 = require("./tree-views.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var tree_view_module_1 = require("../../shared/ui/tree-view/tree-view.module");
var TreeViewsModule = (function () {
    function TreeViewsModule() {
    }
    return TreeViewsModule;
}());
TreeViewsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            tree_views_routing_1.treeViewsRouting,
            smartadmin_module_1.SmartadminModule,
            tree_view_module_1.TreeViewModule
        ],
        declarations: [tree_views_component_1.TreeViewsComponent]
    })
], TreeViewsModule);
exports.TreeViewsModule = TreeViewsModule;
//# sourceMappingURL=tree-views.module.js.map