"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nestable_list_component_1 = require("./nestable-list.component");
var NestableListModule = (function () {
    function NestableListModule() {
    }
    return NestableListModule;
}());
NestableListModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [nestable_list_component_1.NestableListComponent],
        exports: [nestable_list_component_1.NestableListComponent],
    })
], NestableListModule);
exports.NestableListModule = NestableListModule;
//# sourceMappingURL=nestable-list.module.js.map