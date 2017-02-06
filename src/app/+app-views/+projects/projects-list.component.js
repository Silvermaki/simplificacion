"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var ProjectsListComponent = (function () {
    function ProjectsListComponent() {
        this.options = {
            "ajax": 'assets/api/project-list.json',
            "iDisplayLength": 15,
            "columns": [
                {
                    "class": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "name" },
                { "data": "est" },
                { "data": "contacts" },
                { "data": "status" },
                { "data": "target-actual" },
                { "data": "starts" },
                { "data": "ends" },
                { "data": "tracker" }
            ],
            "order": [[1, 'asc']]
        };
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
    };
    ProjectsListComponent.prototype.detailsFormat = function (d) {
        return "<table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n            <tbody><tr>\n                <td style=\"width:100px\">Project Title:</td>\n                <td>" + d.name + "</td>\n            </tr>\n            <tr>\n                <td>Deadline:</td>\n                <td>" + d.ends + "</td>\n            </tr>\n            <tr>\n                <td>Extra info:</td>\n                <td>And any further details here (images etc)...</td>\n            </tr>\n            <tr>\n                <td>Comments:</td>\n                <td>" + d.comments + "</td>\n            </tr>\n            <tr>\n                <td>Action:</td>\n                <td>" + d.action + "</td>\n            </tr></tbody>\n        </table>";
    };
    return ProjectsListComponent;
}());
ProjectsListComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-projects',
        templateUrl: './projects-list.component.html',
    }),
    __metadata("design:paramtypes", [])
], ProjectsListComponent);
exports.ProjectsListComponent = ProjectsListComponent;
//# sourceMappingURL=projects-list.component.js.map