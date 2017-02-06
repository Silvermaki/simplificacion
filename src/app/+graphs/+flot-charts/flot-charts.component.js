"use strict";
var core_1 = require("@angular/core");
var examples = require("./flot-examples");
var json_api_service_1 = require("../../core/api/json-api.service");
var flot_examples_1 = require("./flot-examples");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var FlotChartsComponent = (function () {
    function FlotChartsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    FlotChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/flot.json').subscribe(function (data) { return _this.flotData = data; });
        this.flotExamples = examples;
        this.interval = setInterval(function () {
            _this.updateStats();
        }, 1000);
        this.updateStats();
    };
    FlotChartsComponent.prototype.updateStats = function () {
        this.updatingData = [flot_examples_1.FakeDataSource.getRandomData()];
    };
    FlotChartsComponent.prototype.ngOnDestroy = function () {
        this.interval && clearInterval(this.interval);
    };
    return FlotChartsComponent;
}());
FlotChartsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-flot-charts',
        templateUrl: './flot-charts.component.html',
    }),
    __metadata("design:paramtypes", [json_api_service_1.JsonApiService])
], FlotChartsComponent);
exports.FlotChartsComponent = FlotChartsComponent;
//# sourceMappingURL=flot-charts.component.js.map