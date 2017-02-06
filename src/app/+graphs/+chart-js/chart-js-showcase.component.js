"use strict";
var core_1 = require("@angular/core");
var json_api_service_1 = require("../../core/api/json-api.service");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var ChartJsShowcaseComponent = (function () {
    function ChartJsShowcaseComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    ChartJsShowcaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/chartjs.json').subscribe(function (data) {
            _this.chartjsData = data;
        });
    };
    ChartJsShowcaseComponent.prototype.ngOnDestroy = function () { };
    return ChartJsShowcaseComponent;
}());
ChartJsShowcaseComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-chart-js-showcase',
        templateUrl: './chart-js-showcase.component.html',
    }),
    __metadata("design:paramtypes", [json_api_service_1.JsonApiService])
], ChartJsShowcaseComponent);
exports.ChartJsShowcaseComponent = ChartJsShowcaseComponent;
//# sourceMappingURL=chart-js-showcase.component.js.map