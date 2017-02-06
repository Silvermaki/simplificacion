"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var Error500Component = (function () {
    function Error500Component() {
    }
    Error500Component.prototype.ngOnInit = function () {
    };
    return Error500Component;
}());
Error500Component = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-error500',
        templateUrl: './error500.component.html',
    }),
    __metadata("design:paramtypes", [])
], Error500Component);
exports.Error500Component = Error500Component;
//# sourceMappingURL=error500.component.js.map