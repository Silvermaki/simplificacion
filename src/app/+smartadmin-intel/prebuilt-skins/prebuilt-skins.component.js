"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var PrebuiltSkinsComponent = (function () {
    function PrebuiltSkinsComponent() {
    }
    PrebuiltSkinsComponent.prototype.ngOnInit = function () {
    };
    return PrebuiltSkinsComponent;
}());
PrebuiltSkinsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-prebuilt-skins',
        templateUrl: './prebuilt-skins.component.html',
    }),
    __metadata("design:paramtypes", [])
], PrebuiltSkinsComponent);
exports.PrebuiltSkinsComponent = PrebuiltSkinsComponent;
//# sourceMappingURL=prebuilt-skins.component.js.map