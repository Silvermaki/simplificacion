"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var ProductsViewComponent = (function () {
    function ProductsViewComponent() {
    }
    ProductsViewComponent.prototype.ngOnInit = function () {
    };
    return ProductsViewComponent;
}());
ProductsViewComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-products-view',
        templateUrl: './products-view.component.html',
    }),
    __metadata("design:paramtypes", [])
], ProductsViewComponent);
exports.ProductsViewComponent = ProductsViewComponent;
//# sourceMappingURL=products-view.component.js.map