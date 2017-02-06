"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var FormPluginsComponent = (function () {
    function FormPluginsComponent() {
        this.noUiSliderValue = [264, 776];
    }
    FormPluginsComponent.prototype.ngOnInit = function () {
    };
    return FormPluginsComponent;
}());
FormPluginsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-form-plugins',
        templateUrl: './form-plugins.component.html',
    }),
    __metadata("design:paramtypes", [])
], FormPluginsComponent);
exports.FormPluginsComponent = FormPluginsComponent;
//# sourceMappingURL=form-plugins.component.js.map