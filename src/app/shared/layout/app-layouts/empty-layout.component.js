"use strict";
var core_1 = require("@angular/core");
var fade_zoom_in_top_decorator_1 = require("../../animations/fade-zoom-in-top.decorator");
var EmptyLayoutComponent = (function () {
    function EmptyLayoutComponent() {
    }
    EmptyLayoutComponent.prototype.ngOnInit = function () {
    };
    return EmptyLayoutComponent;
}());
EmptyLayoutComponent = __decorate([
    fade_zoom_in_top_decorator_1.FadeZoomInTop(),
    core_1.Component({
        selector: 'app-empty-layout',
        templateUrl: './empty-layout.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [])
], EmptyLayoutComponent);
exports.EmptyLayoutComponent = EmptyLayoutComponent;
//# sourceMappingURL=empty-layout.component.js.map