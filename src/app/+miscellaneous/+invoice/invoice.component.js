"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var InvoiceComponent = (function () {
    function InvoiceComponent() {
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    return InvoiceComponent;
}());
InvoiceComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-invoice',
        templateUrl: './invoice.component.html',
    }),
    __metadata("design:paramtypes", [])
], InvoiceComponent);
exports.InvoiceComponent = InvoiceComponent;
//# sourceMappingURL=invoice.component.js.map