"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var NormalTablesComponent = (function () {
    function NormalTablesComponent() {
    }
    NormalTablesComponent.prototype.ngOnInit = function () {
    };
    return NormalTablesComponent;
}());
NormalTablesComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-normal-tables',
        templateUrl: './normal-tables.component.html',
    }),
    __metadata("design:paramtypes", [])
], NormalTablesComponent);
exports.NormalTablesComponent = NormalTablesComponent;
//# sourceMappingURL=normal-tables.component.js.map