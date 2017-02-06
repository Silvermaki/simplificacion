"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var EasyPieChartsComponent = (function () {
    function EasyPieChartsComponent() {
    }
    EasyPieChartsComponent.prototype.ngOnInit = function () {
    };
    return EasyPieChartsComponent;
}());
EasyPieChartsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-easy-pie-charts',
        templateUrl: './easy-pie-charts.component.html',
    }),
    __metadata("design:paramtypes", [])
], EasyPieChartsComponent);
exports.EasyPieChartsComponent = EasyPieChartsComponent;
//# sourceMappingURL=easy-pie-charts.component.js.map