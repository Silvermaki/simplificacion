"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var BootstrapValidationComponent = (function () {
    function BootstrapValidationComponent() {
    }
    BootstrapValidationComponent.prototype.ngOnInit = function () {
    };
    return BootstrapValidationComponent;
}());
BootstrapValidationComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-bootstrap-validation',
        templateUrl: './bootstrap-validation.component.html',
    }),
    __metadata("design:paramtypes", [])
], BootstrapValidationComponent);
exports.BootstrapValidationComponent = BootstrapValidationComponent;
//# sourceMappingURL=bootstrap-validation.component.js.map