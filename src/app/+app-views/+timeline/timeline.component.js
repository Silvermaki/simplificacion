"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-timeline',
        templateUrl: './timeline.component.html',
    }),
    __metadata("design:paramtypes", [])
], TimelineComponent);
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=timeline.component.js.map