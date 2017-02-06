"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var BlankComponent = (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    return BlankComponent;
}());
BlankComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-blank',
        templateUrl: './blank.component.html',
    }),
    __metadata("design:paramtypes", [])
], BlankComponent);
exports.BlankComponent = BlankComponent;
//# sourceMappingURL=blank.component.js.map