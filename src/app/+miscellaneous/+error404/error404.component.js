"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var Error404Component = (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    return Error404Component;
}());
Error404Component = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-error404',
        templateUrl: './error404.component.html',
    }),
    __metadata("design:paramtypes", [])
], Error404Component);
exports.Error404Component = Error404Component;
//# sourceMappingURL=error404.component.js.map