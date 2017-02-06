"use strict";
var core_1 = require("@angular/core");
var RecentProjectsService = (function () {
    function RecentProjectsService() {
        this.projects = [
            {
                "href": "/",
                "title": "Online e-merchant management system - attaching integration with the iOS"
            },
            {
                "href": "/",
                "title": "Notes on pipeline upgradee"
            },
            {
                "href": "/",
                "title": "Assesment Report for merchant account"
            }
        ];
    }
    RecentProjectsService.prototype.getProjects = function () {
        return this.projects;
    };
    RecentProjectsService.prototype.clearProjects = function () {
        this.projects = [];
    };
    return RecentProjectsService;
}());
RecentProjectsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], RecentProjectsService);
exports.RecentProjectsService = RecentProjectsService;
//# sourceMappingURL=recent-projects.service.js.map