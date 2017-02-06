"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var projects_list_component_1 = require("./projects-list.component");
var routes = [{
        path: '',
        component: projects_list_component_1.ProjectsListComponent
    }];
var ProjectsListRoutingModule = (function () {
    function ProjectsListRoutingModule() {
    }
    return ProjectsListRoutingModule;
}());
ProjectsListRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], ProjectsListRoutingModule);
exports.ProjectsListRoutingModule = ProjectsListRoutingModule;
//# sourceMappingURL=projects-list-routing.module.js.map