"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var SparklinesComponent = (function () {
    function SparklinesComponent() {
    }
    SparklinesComponent.prototype.ngOnInit = function () {
    };
    return SparklinesComponent;
}());
SparklinesComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-sparklines',
        templateUrl: './sparklines.component.html',
    }),
    __metadata("design:paramtypes", [])
], SparklinesComponent);
exports.SparklinesComponent = SparklinesComponent;
//# sourceMappingURL=sparklines.component.js.map