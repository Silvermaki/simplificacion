"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var datatable_component_1 = require("./datatable.component");
// require('smartadmin-plugins/bower_components/datatables.net-colreorder-bs/css/colReorder.bootstrap.min.css');
var SmartadminDatatableModule = (function () {
    function SmartadminDatatableModule() {
    }
    return SmartadminDatatableModule;
}());
SmartadminDatatableModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [datatable_component_1.DatatableComponent],
        exports: [datatable_component_1.DatatableComponent],
    })
], SmartadminDatatableModule);
exports.SmartadminDatatableModule = SmartadminDatatableModule;
//# sourceMappingURL=smartadmin-datatable.module.js.map