"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var FormLayoutsComponent = (function () {
    function FormLayoutsComponent() {
    }
    FormLayoutsComponent.prototype.ngOnInit = function () {
    };
    return FormLayoutsComponent;
}());
FormLayoutsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-form-layouts',
        templateUrl: './form-layouts.component.html',
    }),
    __metadata("design:paramtypes", [])
], FormLayoutsComponent);
exports.FormLayoutsComponent = FormLayoutsComponent;
//# sourceMappingURL=form-layouts.component.js.map