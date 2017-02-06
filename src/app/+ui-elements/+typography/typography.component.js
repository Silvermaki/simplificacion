"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-typography',
        templateUrl: './typography.component.html',
        styleUrls: ['./typography.component.css'],
    }),
    __metadata("design:paramtypes", [])
], TypographyComponent);
exports.TypographyComponent = TypographyComponent;
//# sourceMappingURL=typography.component.js.map