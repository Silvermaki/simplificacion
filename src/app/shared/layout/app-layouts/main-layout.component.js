"use strict";
var core_1 = require("@angular/core");
var fade_zoom_in_top_decorator_1 = require("../../animations/fade-zoom-in-top.decorator");
var MainLayoutComponent = (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    return MainLayoutComponent;
}());
MainLayoutComponent = __decorate([
    fade_zoom_in_top_decorator_1.FadeZoomInTop(),
    core_1.Component({
        selector: 'app-main-layout',
        templateUrl: './main-layout.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [])
], MainLayoutComponent);
exports.MainLayoutComponent = MainLayoutComponent;
//# sourceMappingURL=main-layout.component.js.map