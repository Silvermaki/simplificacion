"use strict";
var core_1 = require("@angular/core");
var json_api_service_1 = require("../../core/api/json-api.service");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var MorrisChartsComponent = (function () {
    function MorrisChartsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    MorrisChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/morris.json').subscribe(function (data) { return _this.morrisDemoData = data; });
    };
    MorrisChartsComponent.prototype.barColorsDemo = function (row, series, type) {
        if (type === 'bar') {
            var red = Math.ceil(150 * row.y / 8);
            return 'rgb(' + red + ',0,0)';
        }
        else {
            return '#000';
        }
    };
    MorrisChartsComponent.prototype.percentageFormat = function (x) {
        return x + "%";
    };
    MorrisChartsComponent.prototype.dateFormat = function (d) {
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
    };
    return MorrisChartsComponent;
}());
MorrisChartsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-morris-charts',
        templateUrl: './morris-charts.component.html',
    }),
    __metadata("design:paramtypes", [json_api_service_1.JsonApiService])
], MorrisChartsComponent);
exports.MorrisChartsComponent = MorrisChartsComponent;
//# sourceMappingURL=morris-charts.component.js.map