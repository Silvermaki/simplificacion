"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var AppLayoutsComponent = (function () {
    function AppLayoutsComponent() {
    }
    AppLayoutsComponent.prototype.ngOnInit = function () {
    };
    return AppLayoutsComponent;
}());
AppLayoutsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-app-layouts',
        templateUrl: './app-layouts.component.html',
    }),
    __metadata("design:paramtypes", [])
], AppLayoutsComponent);
exports.AppLayoutsComponent = AppLayoutsComponent;
//# sourceMappingURL=app-layouts.component.js.map