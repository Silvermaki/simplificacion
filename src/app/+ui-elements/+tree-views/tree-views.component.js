"use strict";
var core_1 = require("@angular/core");
var json_api_service_1 = require("../../core/api/json-api.service");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var TreeViewsComponent = (function () {
    function TreeViewsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];
    }
    TreeViewsComponent.prototype.add = function () {
        console.log(this.task, this.day);
    };
    TreeViewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/ui-examples/tree-view.json').subscribe(function (data) {
            _this.demo1 = data.demo1;
            _this.demo2 = data.demo2;
        });
    };
    TreeViewsComponent.prototype.changeLstener = function (payload) {
        console.log('change payload', payload);
    };
    return TreeViewsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TreeViewsComponent.prototype, "task", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TreeViewsComponent.prototype, "week", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TreeViewsComponent.prototype, "day", void 0);
TreeViewsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-tree-views',
        templateUrl: './tree-views.component.html',
    }),
    __metadata("design:paramtypes", [json_api_service_1.JsonApiService])
], TreeViewsComponent);
exports.TreeViewsComponent = TreeViewsComponent;
//# sourceMappingURL=tree-views.component.js.map