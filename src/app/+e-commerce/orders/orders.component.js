"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var OrdersComponent = (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-orders',
        templateUrl: './orders.component.html',
    }),
    __metadata("design:paramtypes", [])
], OrdersComponent);
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map