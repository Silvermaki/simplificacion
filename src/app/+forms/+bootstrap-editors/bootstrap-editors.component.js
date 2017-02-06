"use strict";
var core_1 = require("@angular/core");
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var BootstrapEditorsComponent = (function () {
    function BootstrapEditorsComponent() {
    }
    BootstrapEditorsComponent.prototype.ngOnInit = function () {
    };
    return BootstrapEditorsComponent;
}());
BootstrapEditorsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-bootstrap-editors',
        templateUrl: './bootstrap-editors.component.html',
    }),
    __metadata("design:paramtypes", [])
], BootstrapEditorsComponent);
exports.BootstrapEditorsComponent = BootstrapEditorsComponent;
//# sourceMappingURL=bootstrap-editors.component.js.map