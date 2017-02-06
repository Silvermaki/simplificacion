"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var projects_list_routing_module_1 = require("./projects-list-routing.module");
var projects_list_component_1 = require("./projects-list.component");
var smartadmin_datatable_module_1 = require("../../shared/ui/datatable/smartadmin-datatable.module");
var layout_module_1 = require("../../shared/layout/layout.module");
var stats_module_1 = require("../../shared/stats/stats.module");
var smartadmin_widgets_module_1 = require("../../shared/widgets/smartadmin-widgets.module");
var ProjectsListModule = (function () {
    function ProjectsListModule() {
    }
    return ProjectsListModule;
}());
ProjectsListModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            projects_list_routing_module_1.ProjectsListRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
            smartadmin_datatable_module_1.SmartadminDatatableModule,
            smartadmin_widgets_module_1.SmartadminWidgetsModule,
        ],
        declarations: [projects_list_component_1.ProjectsListComponent]
    })
], ProjectsListModule);
exports.ProjectsListModule = ProjectsListModule;
//# sourceMappingURL=projects-list.module.js.map