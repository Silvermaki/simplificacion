"use strict";
var core_1 = require("@angular/core");
var smartadmin_module_1 = require("../shared/smartadmin.module");
var tables_routing_1 = require("./tables.routing");
var normal_tables_component_1 = require("./+normal-tables/normal-tables.component");
var datatables_showcase_component_1 = require("./+datatables-showcase/datatables-showcase.component");
var smartadmin_datatable_module_1 = require("../shared/ui/datatable/smartadmin-datatable.module");
var datatables_rest_demo_component_1 = require("./+datatables-showcase/datatables-rest-demo.component");
var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    core_1.NgModule({
        declarations: [
            normal_tables_component_1.NormalTablesComponent, datatables_showcase_component_1.DatatablesShowcaseComponent, datatables_rest_demo_component_1.DatatablesRestDemoComponent
        ],
        imports: [
            smartadmin_module_1.SmartadminModule,
            smartadmin_datatable_module_1.SmartadminDatatableModule,
            tables_routing_1.routing
        ],
    })
], TablesModule);
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map