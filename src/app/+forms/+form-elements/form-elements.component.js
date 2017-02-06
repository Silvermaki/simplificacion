"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var FormElementsComponent = (function () {
    function FormElementsComponent() {
    }
    FormElementsComponent.prototype.ngOnInit = function () {
    };
    return FormElementsComponent;
}());
FormElementsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-form-elements',
        templateUrl: './form-elements.component.html',
    }),
    __metadata("design:paramtypes", [])
], FormElementsComponent);
exports.FormElementsComponent = FormElementsComponent;
//# sourceMappingURL=form-elements.component.js.map