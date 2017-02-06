"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var tree_view_component_1 = require("./tree-view.component");
var TreeViewModule = (function () {
    function TreeViewModule() {
    }
    return TreeViewModule;
}());
TreeViewModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [tree_view_component_1.TreeViewComponent],
        exports: [tree_view_component_1.TreeViewComponent]
    })
], TreeViewModule);
exports.TreeViewModule = TreeViewModule;
//# sourceMappingURL=tree-view.module.js.map