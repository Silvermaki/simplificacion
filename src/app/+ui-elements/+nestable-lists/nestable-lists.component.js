"use strict";
var core_1 = require("@angular/core");
var json_api_service_1 = require("../../core/api/json-api.service");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var NestableListsComponent = (function () {
    function NestableListsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    NestableListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/ui-examples/nestable-lists.json').subscribe(function (data) {
            _this.demo1 = data.demo1;
            _this.demo2 = data.demo2;
            _this.demo3 = data.demo2;
        });
    };
    NestableListsComponent.prototype.onChange1 = function (payload) {
        this.nestable1DemoOutput = payload;
    };
    NestableListsComponent.prototype.onChange2 = function (payload) {
        this.nestable2DemoOutput = payload;
    };
    NestableListsComponent.prototype.onChange3 = function (payload) {
        this.nestable1DemoOutput = payload;
    };
    return NestableListsComponent;
}());
NestableListsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-nestable-lists',
        templateUrl: './nestable-lists.component.html',
    }),
    __metadata("design:paramtypes", [json_api_service_1.JsonApiService])
], NestableListsComponent);
exports.NestableListsComponent = NestableListsComponent;
//# sourceMappingURL=nestable-lists.component.js.map