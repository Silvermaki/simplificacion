"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var grid_routing_1 = require("./grid.routing");
var grid_component_1 = require("./grid.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var GridModule = (function () {
    function GridModule() {
    }
    return GridModule;
}());
GridModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            grid_routing_1.gridRouting,
            smartadmin_module_1.SmartadminModule,
        ],
        declarations: [grid_component_1.GridComponent]
    })
], GridModule);
exports.GridModule = GridModule;
//# sourceMappingURL=grid.module.js.map