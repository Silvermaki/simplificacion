"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var FormValidationComponent = (function () {
    function FormValidationComponent() {
    }
    FormValidationComponent.prototype.ngOnInit = function () {
    };
    return FormValidationComponent;
}());
FormValidationComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-form-validation',
        templateUrl: './form-validation.component.html',
    }),
    __metadata("design:paramtypes", [])
], FormValidationComponent);
exports.FormValidationComponent = FormValidationComponent;
//# sourceMappingURL=form-validation.component.js.map