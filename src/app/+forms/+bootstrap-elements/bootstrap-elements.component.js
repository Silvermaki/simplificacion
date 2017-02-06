"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var BootstrapElementsComponent = (function () {
    function BootstrapElementsComponent() {
        this.styleTheme = 'style-0';
        this.styleThemes = ['style-0', 'style-1', 'style-2', 'style-3'];
    }
    BootstrapElementsComponent.prototype.ngOnInit = function () {
    };
    return BootstrapElementsComponent;
}());
BootstrapElementsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-bootstrap-elements',
        templateUrl: './bootstrap-elements.component.html',
    }),
    __metadata("design:paramtypes", [])
], BootstrapElementsComponent);
exports.BootstrapElementsComponent = BootstrapElementsComponent;
//# sourceMappingURL=bootstrap-elements.component.js.map