"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nestable_lists_routing_1 = require("./nestable-lists.routing");
var nestable_lists_component_1 = require("./nestable-lists.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var nestable_list_module_1 = require("../../shared/ui/nestable-list/nestable-list.module");
var NestableListsModule = (function () {
    function NestableListsModule() {
    }
    return NestableListsModule;
}());
NestableListsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            nestable_lists_routing_1.nestableListsRouting,
            smartadmin_module_1.SmartadminModule,
            nestable_list_module_1.NestableListModule,
        ],
        declarations: [nestable_lists_component_1.NestableListsComponent]
    })
], NestableListsModule);
exports.NestableListsModule = NestableListsModule;
//# sourceMappingURL=nestable-lists.module.js.map