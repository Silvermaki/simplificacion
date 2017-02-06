"use strict";
var core_1 = require("@angular/core");
var recent_projects_service_1 = require("./recent-projects.service");
var RecentProjectsComponent = (function () {
    function RecentProjectsComponent(projectsService) {
        this.projectsService = projectsService;
    }
    RecentProjectsComponent.prototype.ngOnInit = function () {
        this.projects = this.projectsService.getProjects();
    };
    RecentProjectsComponent.prototype.clearProjects = function () {
        this.projectsService.clearProjects();
        this.projects = this.projectsService.getProjects();
    };
    return RecentProjectsComponent;
}());
RecentProjectsComponent = __decorate([
    core_1.Component({
        selector: 'sa-recent-projects',
        templateUrl: './recent-projects.component.html',
        providers: [recent_projects_service_1.RecentProjectsService]
    }),
    __metadata("design:paramtypes", [recent_projects_service_1.RecentProjectsService])
], RecentProjectsComponent);
exports.RecentProjectsComponent = RecentProjectsComponent;
//# sourceMappingURL=recent-projects.component.js.map