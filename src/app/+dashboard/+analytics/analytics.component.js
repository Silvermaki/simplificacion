"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var AnalyticsComponent = (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    return AnalyticsComponent;
}());
AnalyticsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-analytics',
        templateUrl: './analytics.component.html',
    }),
    __metadata("design:paramtypes", [])
], AnalyticsComponent);
exports.AnalyticsComponent = AnalyticsComponent;
//# sourceMappingURL=analytics.component.js.map