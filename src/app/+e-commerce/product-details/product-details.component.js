"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent() {
        this.product = {
            slides: [
                {
                    src: 'assets/img/demo/e-comm/detail-1.png',
                },
                {
                    src: 'assets/img/demo/e-comm/detail-2.png'
                },
                {
                    src: 'assets/img/demo/e-comm/detail-3.png'
                }
            ]
        };
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
    };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-product-details',
        templateUrl: './product-details.component.html',
    }),
    __metadata("design:paramtypes", [])
], ProductDetailsComponent);
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product-details.component.js.map