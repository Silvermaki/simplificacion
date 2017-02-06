"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var GridComponent = (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    return GridComponent;
}());
GridComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-grid',
        templateUrl: './grid.component.html',
        styleUrls: ['./grid.component.css'],
    }),
    __metadata("design:paramtypes", [])
], GridComponent);
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map