"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var WizardsComponent = (function () {
    function WizardsComponent() {
    }
    WizardsComponent.prototype.ngOnInit = function () {
    };
    return WizardsComponent;
}());
WizardsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-wizards',
        templateUrl: './wizards.component.html',
    }),
    __metadata("design:paramtypes", [])
], WizardsComponent);
exports.WizardsComponent = WizardsComponent;
//# sourceMappingURL=wizards.component.js.map