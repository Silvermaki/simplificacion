"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../../shared/animations/fade-in-top.decorator");
var GeneralViewComponent = (function () {
    function GeneralViewComponent() {
    }
    GeneralViewComponent.prototype.ngOnInit = function () {
    };
    return GeneralViewComponent;
}());
GeneralViewComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-general-view',
        templateUrl: './general-view.component.html',
    }),
    __metadata("design:paramtypes", [])
], GeneralViewComponent);
exports.GeneralViewComponent = GeneralViewComponent;
//# sourceMappingURL=general-view.component.js.map