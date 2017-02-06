"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var PricingTablesComponent = (function () {
    function PricingTablesComponent() {
    }
    PricingTablesComponent.prototype.ngOnInit = function () {
    };
    return PricingTablesComponent;
}());
PricingTablesComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-pricing-tables',
        templateUrl: './pricing-tables.component.html',
    }),
    __metadata("design:paramtypes", [])
], PricingTablesComponent);
exports.PricingTablesComponent = PricingTablesComponent;
//# sourceMappingURL=pricing-tables.component.js.map