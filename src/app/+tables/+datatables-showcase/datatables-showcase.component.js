"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var DatatablesShowcaseComponent = (function () {
    function DatatablesShowcaseComponent() {
    }
    DatatablesShowcaseComponent.prototype.ngOnInit = function () {
    };
    return DatatablesShowcaseComponent;
}());
DatatablesShowcaseComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-datatables-showcase',
        templateUrl: './datatables-showcase.component.html',
    }),
    __metadata("design:paramtypes", [])
], DatatablesShowcaseComponent);
exports.DatatablesShowcaseComponent = DatatablesShowcaseComponent;
//# sourceMappingURL=datatables-showcase.component.js.map